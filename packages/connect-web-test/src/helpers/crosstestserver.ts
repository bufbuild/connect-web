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

import { type Transport, createRouterTransport } from "@bufbuild/connect";
import {
  createConnectTransport,
  createGrpcWebTransport,
} from "@bufbuild/connect-web";
import { testRoutes } from "./test-routes.js";

// The following servers are available through crosstests:
//
// | server        | port |
// | ------------- | --- |
// | connect-go h1 | 8080 |
// | connect-go h2 | 8081 |
// | grpc-go       | 8083 |
//
// Source: // https://github.com/bufbuild/connect-es/pull/87
const crossTestConnectGoH1BaseUrl = "https://127.0.0.1:8080";

// see connect-node-h1-server.mjs
export const connectNodeH1BaseUrl = "http://127.0.0.1:8085";

const crosstestTransports = {
  // gRPC-web
  "@bufbuild/connect-web (gRPC-web, binary) gRPC-web against connect-go (h1)": (
    opts?: Record<string, unknown>
  ) => {
    const options = {
      ...opts,
      baseUrl: crossTestConnectGoH1BaseUrl,
      useBinaryFormat: true,
    };
    return {
      transport: createGrpcWebTransport(options),
      options,
      transportType: TransportType.GRPC_WEB,
    };
  },
  "@bufbuild/connect-web (gRPC-web, JSON) gRPC-web against connect-go (h1)": (
    opts?: Record<string, unknown>
  ) => {
    const options = {
      ...opts,
      baseUrl: crossTestConnectGoH1BaseUrl,
      useBinaryFormat: false,
    };
    return {
      transport: createGrpcWebTransport(options),
      options,
      transportType: TransportType.GRPC_WEB,
    };
  },
  "@bufbuild/connect-web (gRPC-web, binary) gRPC-web against @bufbuild/connect-node (h1)":
    (opts?: Record<string, unknown>) => {
      const options = {
        ...opts,
        baseUrl: connectNodeH1BaseUrl,
        useBinaryFormat: true,
      };
      return {
        transport: createGrpcWebTransport(options),
        options,
        transportType: TransportType.GRPC_WEB,
      };
    },
  "@bufbuild/connect-web (gRPC-web, JSON) gRPC-web against @bufbuild/connect-node (h1)":
    (opts?: Record<string, unknown>) => {
      const options = {
        ...opts,
        baseUrl: connectNodeH1BaseUrl,
        useBinaryFormat: false,
      };
      return {
        transport: createGrpcWebTransport(options),
        options,
        transportType: TransportType.GRPC_WEB,
      };
    },
  // Connect
  "@bufbuild/connect-web (Connect, binary) against connect-go (h1)": (
    opts?: Record<string, unknown>
  ) => {
    const options = {
      ...opts,
      baseUrl: crossTestConnectGoH1BaseUrl,
      useBinaryFormat: true,
    };
    return {
      transport: createConnectTransport(options),
      options,
      transportType: TransportType.CONNECT,
    };
  },
  "@bufbuild/connect-web (Connect, JSON) against connect-go (h1)": (
    opts?: Record<string, unknown>
  ) => {
    const options = {
      ...opts,
      baseUrl: crossTestConnectGoH1BaseUrl,
      useBinaryFormat: false,
    };
    return {
      transport: createConnectTransport(options),
      options,
      transportType: TransportType.CONNECT,
    };
  },
  "@bufbuild/connect-web (Connect, binary) against @bufbuild/connect-node (h1)":
    (opts?: Record<string, unknown>) => {
      const options = {
        ...opts,
        baseUrl: connectNodeH1BaseUrl,
        useBinaryFormat: true,
      };
      return {
        transport: createConnectTransport(options),
        options,
        transportType: TransportType.CONNECT,
      };
    },
  "@bufbuild/connect-web (Connect, JSON) against @bufbuild/connect-node (h1)": (
    opts?: Record<string, unknown>
  ) => {
    const options = {
      ...opts,
      baseUrl: connectNodeH1BaseUrl,
      useBinaryFormat: false,
    };
    return {
      transport: createConnectTransport(options),
      options,
      transportType: TransportType.CONNECT,
    };
  },

  // ConnectRouter
  "@bufbuild/connect-web (ConnectRouter, binary)": (
    opts?: Record<string, unknown>
  ) => {
    const options = {
      ...opts,
      useBinaryFormat: true,
    };
    return {
      transport: createRouterTransport(testRoutes, { transport: options }),
      options,
      transportType: TransportType.CONNECT_ROUTER,
    };
  },

  "@bufbuild/connect-web (ConnectRouter, JSON)": (
    opts?: Record<string, unknown>
  ) => {
    const options = {
      ...opts,
      useBinaryFormat: false,
    };
    return {
      transport: createRouterTransport(testRoutes, { transport: options }),
      options,
      transportType: TransportType.CONNECT_ROUTER,
    };
  },
};

export enum TransportType {
  GRPC_WEB,
  CONNECT,
  CONNECT_ROUTER,
}

interface TransportDetail {
  transport: Transport;
  options: Record<string, unknown>;
  transportType: TransportType;
}

export function describeTransports(
  specDefinitions: (
    transport: (options?: Record<string, unknown>) => TransportDetail,
    transportName: keyof typeof crosstestTransports
  ) => void
) {
  for (const [name, transportFactory] of Object.entries(crosstestTransports)) {
    describe(name, () => {
      specDefinitions(
        transportFactory,
        name as keyof typeof crosstestTransports
      );
    });
  }
}

export function describeTransportsExcluding(
  exclude: Array<keyof typeof crosstestTransports>,
  specDefinitions: (
    transport: (options?: Record<string, unknown>) => TransportDetail,
    transportName: keyof typeof crosstestTransports
  ) => void
) {
  for (const [name, transportFactory] of Object.entries(crosstestTransports)) {
    if (exclude.includes(name as keyof typeof crosstestTransports)) {
      continue;
    }
    describe(name, () => {
      specDefinitions(
        transportFactory,
        name as keyof typeof crosstestTransports
      );
    });
  }
}
