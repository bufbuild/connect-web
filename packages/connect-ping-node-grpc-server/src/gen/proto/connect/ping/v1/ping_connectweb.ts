// Copyright 2021-2022 Buf Technologies, Inc.
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

/* eslint-disable */
/* @ts-nocheck */
// @generated by protoc-gen-connect-web v0.0.2-alpha.2 with parameter "target=ts"
// @generated from file proto/connect/ping/v1/ping.proto (package connect.ping.v1, syntax proto3)
//
// Copyright 2021-2022 Buf Technologies, Inc.
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

import {CountUpRequest, CountUpResponse, CumSumRequest, CumSumResponse, FailRequest, FailResponse, PingRequest, PingResponse, SumRequest, SumResponse} from "./ping_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service connect.ping.v1.PingService
 */
export const PingService = {
  typeName: "connect.ping.v1.PingService",
  methods: {
    /**
     * Ping sends a ping to the server to determine if it's reachable.
     *
     * @generated from rpc connect.ping.v1.PingService.Ping
     */
    ping: {
      name: "Ping",
      I: PingRequest,
      O: PingResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Fail always fails.
     *
     * @generated from rpc connect.ping.v1.PingService.Fail
     */
    fail: {
      name: "Fail",
      I: FailRequest,
      O: FailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Sum calculates the sum of the numbers sent on the stream.
     *
     * @generated from rpc connect.ping.v1.PingService.Sum
     */
    sum: {
      name: "Sum",
      I: SumRequest,
      O: SumResponse,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * CountUp returns a stream of the numbers up to the given request.
     *
     * @generated from rpc connect.ping.v1.PingService.CountUp
     */
    countUp: {
      name: "CountUp",
      I: CountUpRequest,
      O: CountUpResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * CumSum determines the cumulative sum of all the numbers sent on the stream.
     *
     * @generated from rpc connect.ping.v1.PingService.CumSum
     */
    cumSum: {
      name: "CumSum",
      I: CumSumRequest,
      O: CumSumResponse,
      kind: MethodKind.BiDiStreaming,
    },
  }
} as const;
