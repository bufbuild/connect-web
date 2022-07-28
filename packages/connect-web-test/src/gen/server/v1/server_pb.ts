// Copyright 2022 Buf Technologies, Inc.
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

// @generated by protoc-gen-es v0.0.10 with parameter "ts_nocheck=false,target=ts"
// @generated from file server/v1/server.proto (package server.v1, syntax proto3)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from enum server.v1.Protocol
 */
export enum Protocol {
  /**
   * @generated from enum value: PROTOCOL_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PROTOCOL_GRPC = 1;
   */
  GRPC = 1,

  /**
   * @generated from enum value: PROTOCOL_GRPC_WEB = 2;
   */
  GRPC_WEB = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(Protocol)
proto3.util.setEnumType(Protocol, "server.v1.Protocol", [
  { no: 0, name: "PROTOCOL_UNSPECIFIED" },
  { no: 1, name: "PROTOCOL_GRPC" },
  { no: 2, name: "PROTOCOL_GRPC_WEB" },
]);

/**
 * ServerMetadata is the metadata returned from the server started by the server binary.
 *
 * @generated from message server.v1.ServerMetadata
 */
export class ServerMetadata extends Message<ServerMetadata> {
  /**
   * @generated from field: string host = 1;
   */
  host = "";

  /**
   * @generated from field: repeated server.v1.ProtocolSupport protocols = 2;
   */
  protocols: ProtocolSupport[] = [];

  constructor(data?: PartialMessage<ServerMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "server.v1.ServerMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "protocols", kind: "message", T: ProtocolSupport, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerMetadata {
    return new ServerMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerMetadata {
    return new ServerMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerMetadata {
    return new ServerMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: ServerMetadata | PlainMessage<ServerMetadata> | undefined, b: ServerMetadata | PlainMessage<ServerMetadata> | undefined): boolean {
    return proto3.util.equals(ServerMetadata, a, b);
  }
}

/**
 * @generated from message server.v1.ProtocolSupport
 */
export class ProtocolSupport extends Message<ProtocolSupport> {
  /**
   * @generated from field: server.v1.Protocol protocol = 1;
   */
  protocol = Protocol.UNSPECIFIED;

  /**
   * @generated from field: repeated server.v1.HTTPVersion http_versions = 2;
   */
  httpVersions: HTTPVersion[] = [];

  /**
   * @generated from field: string port = 3;
   */
  port = "";

  constructor(data?: PartialMessage<ProtocolSupport>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "server.v1.ProtocolSupport";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "protocol", kind: "enum", T: proto3.getEnumType(Protocol) },
    { no: 2, name: "http_versions", kind: "message", T: HTTPVersion, repeated: true },
    { no: 3, name: "port", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtocolSupport {
    return new ProtocolSupport().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtocolSupport {
    return new ProtocolSupport().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtocolSupport {
    return new ProtocolSupport().fromJsonString(jsonString, options);
  }

  static equals(a: ProtocolSupport | PlainMessage<ProtocolSupport> | undefined, b: ProtocolSupport | PlainMessage<ProtocolSupport> | undefined): boolean {
    return proto3.util.equals(ProtocolSupport, a, b);
  }
}

/**
 * @generated from message server.v1.HTTPVersion
 */
export class HTTPVersion extends Message<HTTPVersion> {
  /**
   * @generated from field: int32 major = 1;
   */
  major = 0;

  /**
   * @generated from field: int32 minor = 2;
   */
  minor = 0;

  constructor(data?: PartialMessage<HTTPVersion>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "server.v1.HTTPVersion";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "major", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "minor", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HTTPVersion {
    return new HTTPVersion().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HTTPVersion {
    return new HTTPVersion().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HTTPVersion {
    return new HTTPVersion().fromJsonString(jsonString, options);
  }

  static equals(a: HTTPVersion | PlainMessage<HTTPVersion> | undefined, b: HTTPVersion | PlainMessage<HTTPVersion> | undefined): boolean {
    return proto3.util.equals(HTTPVersion, a, b);
  }
}

