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
// @generated from file buf/registry/module/v1beta1/label_service.proto (package buf.registry.module.v1beta1, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { CommitCheckState, CommitCheckStatus, Label, LabelRef } from "./label_pb.js";
import { ResourceRef } from "./resource_pb.js";
import { DigestType } from "./digest_pb.js";
import { Commit } from "./commit_pb.js";

/**
 * @generated from message buf.registry.module.v1beta1.GetLabelsRequest
 */
export class GetLabelsRequest extends Message<GetLabelsRequest> {
  /**
   * The Labels to request.
   *
   * This may reference archived Labels.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.LabelRef label_refs = 1;
   */
  labelRefs: LabelRef[] = [];

  constructor(data?: PartialMessage<GetLabelsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.GetLabelsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "label_refs", kind: "message", T: LabelRef, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLabelsRequest {
    return new GetLabelsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLabelsRequest {
    return new GetLabelsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLabelsRequest {
    return new GetLabelsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetLabelsRequest | PlainMessage<GetLabelsRequest> | undefined, b: GetLabelsRequest | PlainMessage<GetLabelsRequest> | undefined): boolean {
    return proto3.util.equals(GetLabelsRequest, a, b);
  }
}

/**
 * @generated from message buf.registry.module.v1beta1.GetLabelsResponse
 */
export class GetLabelsResponse extends Message<GetLabelsResponse> {
  /**
   * The retrieved Labels in the same order as requested.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.Label labels = 1;
   */
  labels: Label[] = [];

  constructor(data?: PartialMessage<GetLabelsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.GetLabelsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "labels", kind: "message", T: Label, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLabelsResponse {
    return new GetLabelsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLabelsResponse {
    return new GetLabelsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLabelsResponse {
    return new GetLabelsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetLabelsResponse | PlainMessage<GetLabelsResponse> | undefined, b: GetLabelsResponse | PlainMessage<GetLabelsResponse> | undefined): boolean {
    return proto3.util.equals(GetLabelsResponse, a, b);
  }
}

/**
 * @generated from message buf.registry.module.v1beta1.ListLabelsRequest
 */
export class ListLabelsRequest extends Message<ListLabelsRequest> {
  /**
   * The maximum number of items to return.
   *
   * The default value is 10.
   *
   * @generated from field: uint32 page_size = 1;
   */
  pageSize = 0;

  /**
   * The page to start from.
   *
   * If empty, the first page is returned,
   *
   * @generated from field: string page_token = 2;
   */
  pageToken = "";

  /**
   * The reference to list Labels for.
   *
   * See the documentation on Ref for resource resolution details.
   *
   * Once the resource is resolved, the following Labels are listed (subject to any additional filters in the request):
   *   - If a Module is referenced, all Labels for the Module are returned.
   *   - If a Label is referenced, this Label is returned.
   *   - If a Commit is referenced, all Labels that currently point to the Commit are returned. Note that
   *     Labels only point to passed or approved Commits, or Commits where policy checks were disabled.
   *
   * @generated from field: buf.registry.module.v1beta1.ResourceRef resource_ref = 3;
   */
  resourceRef?: ResourceRef;

  /**
   * The order to return the Labels.
   *
   * If not specified, defaults to ORDER_CREATE_TIME_DESC.
   *
   * @generated from field: buf.registry.module.v1beta1.ListLabelsRequest.Order order = 4;
   */
  order = ListLabelsRequest_Order.UNSPECIFIED;

  /**
   * Only return Labels that point to a Commit with one of these CommitCheckStatus values.
   *
   * If not set, Labels that point to a Commit with any CommitCheckStatus value are returned.
   *
   * It is an error to filter on CommitCheckStatuses of pending or rejected, as Labels will only
   * point to Commits that are passed or approved, or that have policy checks disabled.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.CommitCheckStatus commit_check_statuses = 5;
   */
  commitCheckStatuses: CommitCheckStatus[] = [];

  /**
   * Only return Labels with a name that contains this string using a case-insensitive comparison.
   *
   * @generated from field: string name_query = 6;
   */
  nameQuery = "";

  /**
   * The archive filter on the returned Labels.
   *
   * If not specified, defaults to ARCHIVE_FILTER_UNARCHIVED_ONLY.
   *
   * @generated from field: buf.registry.module.v1beta1.ListLabelsRequest.ArchiveFilter archive_filter = 7;
   */
  archiveFilter = ListLabelsRequest_ArchiveFilter.UNSPECIFIED;

  constructor(data?: PartialMessage<ListLabelsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.ListLabelsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "resource_ref", kind: "message", T: ResourceRef },
    { no: 4, name: "order", kind: "enum", T: proto3.getEnumType(ListLabelsRequest_Order) },
    { no: 5, name: "commit_check_statuses", kind: "enum", T: proto3.getEnumType(CommitCheckStatus), repeated: true },
    { no: 6, name: "name_query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "archive_filter", kind: "enum", T: proto3.getEnumType(ListLabelsRequest_ArchiveFilter) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLabelsRequest {
    return new ListLabelsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLabelsRequest {
    return new ListLabelsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLabelsRequest {
    return new ListLabelsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListLabelsRequest | PlainMessage<ListLabelsRequest> | undefined, b: ListLabelsRequest | PlainMessage<ListLabelsRequest> | undefined): boolean {
    return proto3.util.equals(ListLabelsRequest, a, b);
  }
}

/**
 * The list order.
 *
 * @generated from enum buf.registry.module.v1beta1.ListLabelsRequest.Order
 */
export enum ListLabelsRequest_Order {
  /**
   * @generated from enum value: ORDER_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Order by create_time newest to oldest.
   *
   * @generated from enum value: ORDER_CREATE_TIME_DESC = 1;
   */
  CREATE_TIME_DESC = 1,

  /**
   * Order by create_time oldest to newest.
   *
   * @generated from enum value: ORDER_CREATE_TIME_ASC = 2;
   */
  CREATE_TIME_ASC = 2,

  /**
   * Order by update_time newest to oldest.
   *
   * @generated from enum value: ORDER_UPDATE_TIME_DESC = 3;
   */
  UPDATE_TIME_DESC = 3,

  /**
   * Order by update_time oldest to newest.
   *
   * @generated from enum value: ORDER_UPDATE_TIME_ASC = 4;
   */
  UPDATE_TIME_ASC = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(ListLabelsRequest_Order)
proto3.util.setEnumType(ListLabelsRequest_Order, "buf.registry.module.v1beta1.ListLabelsRequest.Order", [
  { no: 0, name: "ORDER_UNSPECIFIED" },
  { no: 1, name: "ORDER_CREATE_TIME_DESC" },
  { no: 2, name: "ORDER_CREATE_TIME_ASC" },
  { no: 3, name: "ORDER_UPDATE_TIME_DESC" },
  { no: 4, name: "ORDER_UPDATE_TIME_ASC" },
]);

/**
 * A filter on whether a Label is archived or not.
 *
 * @generated from enum buf.registry.module.v1beta1.ListLabelsRequest.ArchiveFilter
 */
export enum ListLabelsRequest_ArchiveFilter {
  /**
   * @generated from enum value: ARCHIVE_FILTER_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Return only unarchived labels.
   *
   * @generated from enum value: ARCHIVE_FILTER_UNARCHIVED_ONLY = 1;
   */
  UNARCHIVED_ONLY = 1,

  /**
   * Return only archived labels.
   *
   * @generated from enum value: ARCHIVE_FILTER_ARCHIVED_ONLY = 2;
   */
  ARCHIVED_ONLY = 2,

  /**
   * Return both archived and unarchived labels.
   *
   * @generated from enum value: ARCHIVE_FILTER_ALL = 3;
   */
  ALL = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ListLabelsRequest_ArchiveFilter)
proto3.util.setEnumType(ListLabelsRequest_ArchiveFilter, "buf.registry.module.v1beta1.ListLabelsRequest.ArchiveFilter", [
  { no: 0, name: "ARCHIVE_FILTER_UNSPECIFIED" },
  { no: 1, name: "ARCHIVE_FILTER_UNARCHIVED_ONLY" },
  { no: 2, name: "ARCHIVE_FILTER_ARCHIVED_ONLY" },
  { no: 3, name: "ARCHIVE_FILTER_ALL" },
]);

/**
 * @generated from message buf.registry.module.v1beta1.ListLabelsResponse
 */
export class ListLabelsResponse extends Message<ListLabelsResponse> {
  /**
   * The next page token.
   *
   * If empty, there are no more pages.
   *
   * @generated from field: string next_page_token = 1;
   */
  nextPageToken = "";

  /**
   * The listed Labels.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.Label labels = 2;
   */
  labels: Label[] = [];

  constructor(data?: PartialMessage<ListLabelsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.ListLabelsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "labels", kind: "message", T: Label, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLabelsResponse {
    return new ListLabelsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLabelsResponse {
    return new ListLabelsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLabelsResponse {
    return new ListLabelsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListLabelsResponse | PlainMessage<ListLabelsResponse> | undefined, b: ListLabelsResponse | PlainMessage<ListLabelsResponse> | undefined): boolean {
    return proto3.util.equals(ListLabelsResponse, a, b);
  }
}

/**
 * @generated from message buf.registry.module.v1beta1.ListLabelHistoryRequest
 */
export class ListLabelHistoryRequest extends Message<ListLabelHistoryRequest> {
  /**
   * The maximum number of items to return.
   *
   * The default value is 10.
   *
   * @generated from field: uint32 page_size = 1;
   */
  pageSize = 0;

  /**
   * The page to start from.
   *
   * If empty, the first page is returned.
   *
   * @generated from field: string page_token = 2;
   */
  pageToken = "";

  /**
   * The Label to list history for.
   *
   * This may reference archived Labels.
   *
   * @generated from field: buf.registry.module.v1beta1.LabelRef label_ref = 3;
   */
  labelRef?: LabelRef;

  /**
   * The order to list the Labels.
   *
   * If not specified, defaults to ORDER_DESC.
   *
   * @generated from field: buf.registry.module.v1beta1.ListLabelHistoryRequest.Order order = 4;
   */
  order = ListLabelHistoryRequest_Order.UNSPECIFIED;

  /**
   * The DigestType to use for Digests returned on Commits.
   *
   * If this DigestType is not available, an error is returned.
   * Note that certain DigestTypes may be deprecated over time.
   *
   * If not set, the latest DigestType is used, currently B5.
   *
   * @generated from field: buf.registry.module.v1beta1.DigestType digest_type = 5;
   */
  digestType = DigestType.UNSPECIFIED;

  /**
   * Only return Commits that have one of these CommitCheckStatus values for this label.
   *
   * If not set, Commits with any CommitCheckStatus value are returned.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.CommitCheckStatus commit_check_statuses = 6;
   */
  commitCheckStatuses: CommitCheckStatus[] = [];

  /**
   * The Commit id to start from.
   *
   * It is an error to provide a Commit id that doesn't exist on the Label.
   *
   * @generated from field: string start_commit_id = 7;
   */
  startCommitId = "";

  /**
   * Only list Commits where the Digest has changed from the previous Commit in the
   * history of this Label.
   *
   * @generated from field: bool only_commits_with_changed_digests = 8;
   */
  onlyCommitsWithChangedDigests = false;

  constructor(data?: PartialMessage<ListLabelHistoryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.ListLabelHistoryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "label_ref", kind: "message", T: LabelRef },
    { no: 4, name: "order", kind: "enum", T: proto3.getEnumType(ListLabelHistoryRequest_Order) },
    { no: 5, name: "digest_type", kind: "enum", T: proto3.getEnumType(DigestType) },
    { no: 6, name: "commit_check_statuses", kind: "enum", T: proto3.getEnumType(CommitCheckStatus), repeated: true },
    { no: 7, name: "start_commit_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "only_commits_with_changed_digests", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLabelHistoryRequest {
    return new ListLabelHistoryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLabelHistoryRequest {
    return new ListLabelHistoryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLabelHistoryRequest {
    return new ListLabelHistoryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListLabelHistoryRequest | PlainMessage<ListLabelHistoryRequest> | undefined, b: ListLabelHistoryRequest | PlainMessage<ListLabelHistoryRequest> | undefined): boolean {
    return proto3.util.equals(ListLabelHistoryRequest, a, b);
  }
}

/**
 * The list order.
 *
 * @generated from enum buf.registry.module.v1beta1.ListLabelHistoryRequest.Order
 */
export enum ListLabelHistoryRequest_Order {
  /**
   * @generated from enum value: ORDER_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Order by association time newest to oldest.
   *
   * The Commits most recently associated with the Label will be listed first.
   *
   * @generated from enum value: ORDER_DESC = 1;
   */
  DESC = 1,

  /**
   * Order by association time oldest to newest.
   *
   * @generated from enum value: ORDER_ASC = 2;
   */
  ASC = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ListLabelHistoryRequest_Order)
proto3.util.setEnumType(ListLabelHistoryRequest_Order, "buf.registry.module.v1beta1.ListLabelHistoryRequest.Order", [
  { no: 0, name: "ORDER_UNSPECIFIED" },
  { no: 1, name: "ORDER_DESC" },
  { no: 2, name: "ORDER_ASC" },
]);

/**
 * @generated from message buf.registry.module.v1beta1.ListLabelHistoryResponse
 */
export class ListLabelHistoryResponse extends Message<ListLabelHistoryResponse> {
  /**
   * The next page token.
   *
   * If empty, there are no more pages.
   *
   * @generated from field: string next_page_token = 1;
   */
  nextPageToken = "";

  /**
   * The ordered history of the Label.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.ListLabelHistoryResponse.Value values = 2;
   */
  values: ListLabelHistoryResponse_Value[] = [];

  constructor(data?: PartialMessage<ListLabelHistoryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.ListLabelHistoryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "values", kind: "message", T: ListLabelHistoryResponse_Value, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLabelHistoryResponse {
    return new ListLabelHistoryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLabelHistoryResponse {
    return new ListLabelHistoryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLabelHistoryResponse {
    return new ListLabelHistoryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListLabelHistoryResponse | PlainMessage<ListLabelHistoryResponse> | undefined, b: ListLabelHistoryResponse | PlainMessage<ListLabelHistoryResponse> | undefined): boolean {
    return proto3.util.equals(ListLabelHistoryResponse, a, b);
  }
}

/**
 * @generated from message buf.registry.module.v1beta1.ListLabelHistoryResponse.Value
 */
export class ListLabelHistoryResponse_Value extends Message<ListLabelHistoryResponse_Value> {
  /**
   * The Commit.
   *
   * @generated from field: buf.registry.module.v1beta1.Commit commit = 1;
   */
  commit?: Commit;

  /**
   * The CommitCheckState for this Commit on this Label.
   *
   * @generated from field: buf.registry.module.v1beta1.CommitCheckState commit_check_state = 2;
   */
  commitCheckState?: CommitCheckState;

  constructor(data?: PartialMessage<ListLabelHistoryResponse_Value>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.ListLabelHistoryResponse.Value";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "commit", kind: "message", T: Commit },
    { no: 2, name: "commit_check_state", kind: "message", T: CommitCheckState },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLabelHistoryResponse_Value {
    return new ListLabelHistoryResponse_Value().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLabelHistoryResponse_Value {
    return new ListLabelHistoryResponse_Value().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLabelHistoryResponse_Value {
    return new ListLabelHistoryResponse_Value().fromJsonString(jsonString, options);
  }

  static equals(a: ListLabelHistoryResponse_Value | PlainMessage<ListLabelHistoryResponse_Value> | undefined, b: ListLabelHistoryResponse_Value | PlainMessage<ListLabelHistoryResponse_Value> | undefined): boolean {
    return proto3.util.equals(ListLabelHistoryResponse_Value, a, b);
  }
}

/**
 * @generated from message buf.registry.module.v1beta1.CreateOrUpdateLabelsRequest
 */
export class CreateOrUpdateLabelsRequest extends Message<CreateOrUpdateLabelsRequest> {
  /**
   * The Labels to create.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.CreateOrUpdateLabelsRequest.Value values = 1;
   */
  values: CreateOrUpdateLabelsRequest_Value[] = [];

  constructor(data?: PartialMessage<CreateOrUpdateLabelsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.CreateOrUpdateLabelsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "values", kind: "message", T: CreateOrUpdateLabelsRequest_Value, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrUpdateLabelsRequest {
    return new CreateOrUpdateLabelsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrUpdateLabelsRequest {
    return new CreateOrUpdateLabelsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrUpdateLabelsRequest {
    return new CreateOrUpdateLabelsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateOrUpdateLabelsRequest | PlainMessage<CreateOrUpdateLabelsRequest> | undefined, b: CreateOrUpdateLabelsRequest | PlainMessage<CreateOrUpdateLabelsRequest> | undefined): boolean {
    return proto3.util.equals(CreateOrUpdateLabelsRequest, a, b);
  }
}

/**
 * An individual request to create or update a Label.
 *
 * @generated from message buf.registry.module.v1beta1.CreateOrUpdateLabelsRequest.Value
 */
export class CreateOrUpdateLabelsRequest_Value extends Message<CreateOrUpdateLabelsRequest_Value> {
  /**
   * The Labels to create or update.
   *
   * @generated from field: buf.registry.module.v1beta1.LabelRef label_ref = 1;
   */
  labelRef?: LabelRef;

  /**
   * The id of the Commit to associate with the Label.
   *
   * If the Label already existed, the Label will now point to this Commit, as long as this Commit
   * is newer than the Commit that the Label is currently pointing to, otherwise an error is
   * returned.
   * If the Label was archived, it will be unarchived.
   *
   * @generated from field: string commit_id = 2;
   */
  commitId = "";

  constructor(data?: PartialMessage<CreateOrUpdateLabelsRequest_Value>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.CreateOrUpdateLabelsRequest.Value";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "label_ref", kind: "message", T: LabelRef },
    { no: 2, name: "commit_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrUpdateLabelsRequest_Value {
    return new CreateOrUpdateLabelsRequest_Value().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrUpdateLabelsRequest_Value {
    return new CreateOrUpdateLabelsRequest_Value().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrUpdateLabelsRequest_Value {
    return new CreateOrUpdateLabelsRequest_Value().fromJsonString(jsonString, options);
  }

  static equals(a: CreateOrUpdateLabelsRequest_Value | PlainMessage<CreateOrUpdateLabelsRequest_Value> | undefined, b: CreateOrUpdateLabelsRequest_Value | PlainMessage<CreateOrUpdateLabelsRequest_Value> | undefined): boolean {
    return proto3.util.equals(CreateOrUpdateLabelsRequest_Value, a, b);
  }
}

/**
 * @generated from message buf.registry.module.v1beta1.CreateOrUpdateLabelsResponse
 */
export class CreateOrUpdateLabelsResponse extends Message<CreateOrUpdateLabelsResponse> {
  /**
   * The created or updated Labels in the same order as given on the request.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.Label labels = 1;
   */
  labels: Label[] = [];

  constructor(data?: PartialMessage<CreateOrUpdateLabelsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.CreateOrUpdateLabelsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "labels", kind: "message", T: Label, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrUpdateLabelsResponse {
    return new CreateOrUpdateLabelsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrUpdateLabelsResponse {
    return new CreateOrUpdateLabelsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrUpdateLabelsResponse {
    return new CreateOrUpdateLabelsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateOrUpdateLabelsResponse | PlainMessage<CreateOrUpdateLabelsResponse> | undefined, b: CreateOrUpdateLabelsResponse | PlainMessage<CreateOrUpdateLabelsResponse> | undefined): boolean {
    return proto3.util.equals(CreateOrUpdateLabelsResponse, a, b);
  }
}

/**
 * @generated from message buf.registry.module.v1beta1.ArchiveLabelsRequest
 */
export class ArchiveLabelsRequest extends Message<ArchiveLabelsRequest> {
  /**
   * The Labels to archive.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.LabelRef label_refs = 1;
   */
  labelRefs: LabelRef[] = [];

  constructor(data?: PartialMessage<ArchiveLabelsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.ArchiveLabelsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "label_refs", kind: "message", T: LabelRef, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArchiveLabelsRequest {
    return new ArchiveLabelsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArchiveLabelsRequest {
    return new ArchiveLabelsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArchiveLabelsRequest {
    return new ArchiveLabelsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ArchiveLabelsRequest | PlainMessage<ArchiveLabelsRequest> | undefined, b: ArchiveLabelsRequest | PlainMessage<ArchiveLabelsRequest> | undefined): boolean {
    return proto3.util.equals(ArchiveLabelsRequest, a, b);
  }
}

/**
 * @generated from message buf.registry.module.v1beta1.ArchiveLabelsResponse
 */
export class ArchiveLabelsResponse extends Message<ArchiveLabelsResponse> {
  constructor(data?: PartialMessage<ArchiveLabelsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.ArchiveLabelsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArchiveLabelsResponse {
    return new ArchiveLabelsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArchiveLabelsResponse {
    return new ArchiveLabelsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArchiveLabelsResponse {
    return new ArchiveLabelsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ArchiveLabelsResponse | PlainMessage<ArchiveLabelsResponse> | undefined, b: ArchiveLabelsResponse | PlainMessage<ArchiveLabelsResponse> | undefined): boolean {
    return proto3.util.equals(ArchiveLabelsResponse, a, b);
  }
}

/**
 * @generated from message buf.registry.module.v1beta1.UnarchiveLabelsRequest
 */
export class UnarchiveLabelsRequest extends Message<UnarchiveLabelsRequest> {
  /**
   * The Labels to unarchive.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.LabelRef label_refs = 1;
   */
  labelRefs: LabelRef[] = [];

  constructor(data?: PartialMessage<UnarchiveLabelsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.UnarchiveLabelsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "label_refs", kind: "message", T: LabelRef, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnarchiveLabelsRequest {
    return new UnarchiveLabelsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnarchiveLabelsRequest {
    return new UnarchiveLabelsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnarchiveLabelsRequest {
    return new UnarchiveLabelsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UnarchiveLabelsRequest | PlainMessage<UnarchiveLabelsRequest> | undefined, b: UnarchiveLabelsRequest | PlainMessage<UnarchiveLabelsRequest> | undefined): boolean {
    return proto3.util.equals(UnarchiveLabelsRequest, a, b);
  }
}

/**
 * @generated from message buf.registry.module.v1beta1.UnarchiveLabelsResponse
 */
export class UnarchiveLabelsResponse extends Message<UnarchiveLabelsResponse> {
  constructor(data?: PartialMessage<UnarchiveLabelsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.module.v1beta1.UnarchiveLabelsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnarchiveLabelsResponse {
    return new UnarchiveLabelsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnarchiveLabelsResponse {
    return new UnarchiveLabelsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnarchiveLabelsResponse {
    return new UnarchiveLabelsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UnarchiveLabelsResponse | PlainMessage<UnarchiveLabelsResponse> | undefined, b: UnarchiveLabelsResponse | PlainMessage<UnarchiveLabelsResponse> | undefined): boolean {
    return proto3.util.equals(UnarchiveLabelsResponse, a, b);
  }
}

