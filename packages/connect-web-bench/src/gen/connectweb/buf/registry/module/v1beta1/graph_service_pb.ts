// Copyright 2021-2024 The Connect Authors
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

// @generated by protoc-gen-es v1.10.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/registry/module/v1beta1/graph_service.proto (package buf.registry.module.v1beta1, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DigestType } from "./digest_pb.js";
import { ResourceRef } from "./resource_pb.js";
import { Graph } from "./graph_pb.js";

/**
 * @generated from message buf.registry.module.v1beta1.GetGraphRequest
 */
export class GetGraphRequest extends Message<GetGraphRequest> {
  /**
   * The references to resolve to Commits to include in the graph.
   *
   * See the documentation on ResourceRef for resource resolution details.
   *
   * Once the resource is resolved, the following Commit is included:
   *   - If a Module is referenced, the Commit of the default Label is included.
   *   - If a Label is referenced, the Commit of this Label is included.
   *   - If a Commit is referenced, the Commit is included.
   *
   * The specified ResourceRefs must reference unique Modules, that is no two ResourceRefs
   * may resolve to the same Module.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.GetGraphRequest.ResourceRef resource_refs = 1;
   */
  resourceRefs: GetGraphRequest_ResourceRef[] = [];

  /**
   * The DigestType to return for Commit nodes.
   *
   * If this DigestType is not available, an error is returned.
   * Note that certain DigestTypes may be deprecated over time.
   *
   * If not set, the latest DigestType is used.
   *
   * @generated from field: buf.registry.module.v1beta1.DigestType digest_type = 2;
   */
  digestType = DigestType.UNSPECIFIED;

  constructor(data?: PartialMessage<GetGraphRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.GetGraphRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource_refs", kind: "message", T: GetGraphRequest_ResourceRef, repeated: true },
    { no: 2, name: "digest_type", kind: "enum", T: proto3.getEnumType(DigestType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGraphRequest {
    return new GetGraphRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGraphRequest {
    return new GetGraphRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGraphRequest {
    return new GetGraphRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetGraphRequest | PlainMessage<GetGraphRequest> | undefined, b: GetGraphRequest | PlainMessage<GetGraphRequest> | undefined): boolean {
    return proto3.util.equals(GetGraphRequest, a, b);
  }
}

/**
 * A ResourceRef to reference a Commit to include in the Graph.
 *
 * This wraps the top-level ResourceRef.
 *
 * @generated from message buf.registry.module.v1beta1.GetGraphRequest.ResourceRef
 */
export class GetGraphRequest_ResourceRef extends Message<GetGraphRequest_ResourceRef> {
  /**
   * The top-level ResourceRef.
   *
   * @generated from field: buf.registry.module.v1beta1.ResourceRef resource_ref = 1;
   */
  resourceRef?: ResourceRef;

  /**
   * The registry hostname of the Resourceref.
   *
   * @generated from field: string registry = 2;
   */
  registry = "";

  constructor(data?: PartialMessage<GetGraphRequest_ResourceRef>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.GetGraphRequest.ResourceRef";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "resource_ref", kind: "message", T: ResourceRef },
    { no: 2, name: "registry", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGraphRequest_ResourceRef {
    return new GetGraphRequest_ResourceRef().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGraphRequest_ResourceRef {
    return new GetGraphRequest_ResourceRef().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGraphRequest_ResourceRef {
    return new GetGraphRequest_ResourceRef().fromJsonString(jsonString, options);
  }

  static equals(a: GetGraphRequest_ResourceRef | PlainMessage<GetGraphRequest_ResourceRef> | undefined, b: GetGraphRequest_ResourceRef | PlainMessage<GetGraphRequest_ResourceRef> | undefined): boolean {
    return proto3.util.equals(GetGraphRequest_ResourceRef, a, b);
  }
}

/**
 * See the package documentation for more details. You should likely use buf.registry.module.v1beta1
 * and not this package.
 *
 * @generated from message buf.registry.module.v1beta1.GetGraphResponse
 */
export class GetGraphResponse extends Message<GetGraphResponse> {
  /**
   * The Graph calculated for the Commits.
   *
   * @generated from field: buf.registry.module.v1beta1.Graph graph = 1;
   */
  graph?: Graph;

  constructor(data?: PartialMessage<GetGraphResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.GetGraphResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "graph", kind: "message", T: Graph },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGraphResponse {
    return new GetGraphResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGraphResponse {
    return new GetGraphResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGraphResponse {
    return new GetGraphResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetGraphResponse | PlainMessage<GetGraphResponse> | undefined, b: GetGraphResponse | PlainMessage<GetGraphResponse> | undefined): boolean {
    return proto3.util.equals(GetGraphResponse, a, b);
  }
}

