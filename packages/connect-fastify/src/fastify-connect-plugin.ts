// Copyright 2021-2023 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type { JsonValue } from "@bufbuild/protobuf";
import {
  ConnectRouter,
  ConnectRouterOptions,
  createConnectRouter,
} from "@bufbuild/connect";
import * as protoConnect from "@bufbuild/connect/protocol-connect";
import * as protoGrpcWeb from "@bufbuild/connect/protocol-grpc-web";
import * as protoGrpc from "@bufbuild/connect/protocol-grpc";
import {
  universalRequestFromNodeRequest,
  universalResponseToNodeResponse,
  compressionBrotli,
  compressionGzip,
} from "@bufbuild/connect-node";
import type { FastifyInstance } from "fastify/types/instance";

interface FastifyConnectPluginOptions extends ConnectRouterOptions {
  /**
   * Route definitions. We recommend the following pattern:
   *
   * Create a file `connect.ts` with a default export such as this:
   *
   * ```ts
   * import {ConnectRouter} from "@bufbuild/connect";
   *
   * export default (router: ConnectRouter) => {
   *   router.service(ElizaService, {});
   * }
   * ```
   *
   * Then pass this function here.
   */
  routes?: (router: ConnectRouter) => void;
}

/**
 * Plug your Connect routes into a Fastify server.
 */
export function fastifyConnectPlugin(
  instance: FastifyInstance,
  opts: FastifyConnectPluginOptions,
  done: (err?: Error) => void
) {
  if (opts.routes === undefined) {
    done();
    return;
  }
  if (opts.acceptCompression === undefined) {
    opts.acceptCompression = [compressionGzip, compressionBrotli];
  }
  const router = createConnectRouter(opts);
  opts.routes(router);

  const uHandlers = router.handlers;
  if (uHandlers.length == 0) {
    done();
    return;
  }

  // we can override all content type parsers (including application/json) in
  // this plugin without affecting outer scope
  addNoopContentTypeParsers(instance);

  for (const uHandler of uHandlers) {
    instance.all(
      uHandler.requestPath,
      {},
      async function handleFastifyRequest(req, reply) {
        const uRes = await uHandler(
          universalRequestFromNodeRequest(
            req.raw,
            req.body as JsonValue | undefined
          )
        );
        // Fastify maintains response headers both on the reply object and on the raw response.
        // So before we hand off to the vanilla node, we need to make sure the headers from
        // reply are copied over to the raw response.  reply.send does this automatically, but
        // we are not using reply.send with this plugin.
        // Note that also we are copying reply headers over top of the raw response headers here
        // to adhere to Fastify's contract here:  https://www.fastify.io/docs/latest/Reference/Reply/#getheaders
        for (const [key, value] of Object.entries(reply.getHeaders())) {
          if (value !== undefined) {
            reply.raw.setHeader(key, value);
          }
        }
        await universalResponseToNodeResponse(uRes, reply.raw);
      }
    );
  }

  done();
}

/**
 * Registers fastify content type parsers that do nothing for all content-types
 * known to Connect.
 */
function addNoopContentTypeParsers(instance: FastifyInstance): void {
  instance.addContentTypeParser(
    [
      protoConnect.contentTypeUnaryJson,
      protoConnect.contentTypeStreamJson,
      protoGrpcWeb.contentTypeProto,
      protoGrpcWeb.contentTypeJson,
      protoGrpc.contentTypeProto,
      protoGrpc.contentTypeJson,
    ],
    noopContentTypeParser
  );
  instance.addContentTypeParser(
    protoGrpc.contentTypeRegExp,
    noopContentTypeParser
  );
  instance.addContentTypeParser(
    protoGrpcWeb.contentTypeRegExp,
    noopContentTypeParser
  );
  instance.addContentTypeParser(
    protoConnect.contentTypeRegExp,
    noopContentTypeParser
  );
}

function noopContentTypeParser(
  _req: unknown,
  _payload: unknown,
  done: (err: null, body?: undefined) => void
) {
  done(null, undefined);
}
