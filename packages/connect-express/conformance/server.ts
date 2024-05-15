#!/usr/bin/env -S npx tsx

import { readFileSync } from "node:fs";
import { compressionBrotli, compressionGzip } from "@connectrpc/connect-node";
import * as http from "node:http";
import * as http2 from "node:http2";
import * as https from "node:https";
import * as net from "node:net";
import { createRegistry } from "@bufbuild/protobuf";
import {
  routes,
  BidiStreamRequest,
  ClientStreamRequest,
  HTTPVersion,
  IdempotentUnaryRequest,
  ServerCompatRequest,
  ServerCompatResponse,
  ServerStreamRequest,
  UnaryRequest,
} from "@connectrpc/connect-conformance";
import express from "express";
import { expressConnectMiddleware } from "@connectrpc/connect-express";

export function run() {
  const req = ServerCompatRequest.fromBinary(
    readFileSync(process.stdin.fd).subarray(4),
  );

  const app = express();
  app.use(
    expressConnectMiddleware({
      routes,
      readMaxBytes: req.messageReceiveLimit,
      acceptCompression: [compressionGzip, compressionBrotli],
      jsonOptions: {
        typeRegistry: createRegistry(
          UnaryRequest,
          ServerStreamRequest,
          ClientStreamRequest,
          BidiStreamRequest,
          IdempotentUnaryRequest,
        ),
      },
    }),
  );

  let server: http.Server | http2.Http2Server;
  let serverOptions: {
    cert?: string;
    key?: string;
    ca?: Buffer;
    requestCert?: true;
    rejectUnauthorized?: true;
    highWaterMark?: number;
  } = {};
  if (req.useTls && req.serverCreds !== undefined) {
    serverOptions = {
      key: req.serverCreds.key.toString(),
      cert: req.serverCreds.cert.toString(),
    };
    if (req.clientTlsCert.length > 0) {
      serverOptions = {
        ...serverOptions,
        requestCert: true,
        rejectUnauthorized: true,
        ca: Buffer.from(req.clientTlsCert),
      };
    }
  }
  switch (req.httpVersion) {
    case HTTPVersion.HTTP_VERSION_1:
      server = req.useTls
        ? https.createServer(serverOptions, app)
        : http.createServer(app);
      break;
    case HTTPVersion.HTTP_VERSION_2:
      throw new Error("HTTP/2 is not supported");
    case HTTPVersion.HTTP_VERSION_3:
      throw new Error("HTTP/3 is not supported");
    default:
      throw new Error("Unknown HTTP version");
  }

  process.on("SIGTERM", () => {
    server.close();
  });
  server.listen(undefined, "127.0.0.1", () => {
    const addrInfo = server.address() as net.AddressInfo;
    const res = new ServerCompatResponse({
      pemCert:
        serverOptions.cert !== undefined
          ? Buffer.from(serverOptions.cert)
          : undefined,
      host: addrInfo.address,
      port: addrInfo.port,
    });
    const data = res.toBinary();
    const size = Buffer.alloc(4);
    size.writeUInt32BE(data.byteLength);
    process.stdout.write(size);
    process.stdout.write(data);
  });
}
run();
