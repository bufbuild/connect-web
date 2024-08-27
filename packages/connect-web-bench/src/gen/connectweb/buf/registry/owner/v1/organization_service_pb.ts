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

// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file buf/registry/owner/v1/organization_service.proto (package buf.registry.owner.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Organization, OrganizationRef, OrganizationVerificationStatus } from "./organization_pb";
import { file_buf_registry_owner_v1_organization } from "./organization_pb";
import type { UserRef } from "./user_pb";
import { file_buf_registry_owner_v1_user } from "./user_pb";
import { file_buf_validate_validate } from "../../../validate/validate_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/registry/owner/v1/organization_service.proto.
 */
export const file_buf_registry_owner_v1_organization_service: GenFile = /*@__PURE__*/
  fileDesc("CjBidWYvcmVnaXN0cnkvb3duZXIvdjEvb3JnYW5pemF0aW9uX3NlcnZpY2UucHJvdG8SFWJ1Zi5yZWdpc3RyeS5vd25lci52MSJpChdHZXRPcmdhbml6YXRpb25zUmVxdWVzdBJOChFvcmdhbml6YXRpb25fcmVmcxgBIAMoCzImLmJ1Zi5yZWdpc3RyeS5vd25lci52MS5Pcmdhbml6YXRpb25SZWZCC7pICJIBBQgBEPoBImAKGEdldE9yZ2FuaXphdGlvbnNSZXNwb25zZRJECg1vcmdhbml6YXRpb25zGAEgAygLMiMuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLk9yZ2FuaXphdGlvbkIIukgFkgECCAEirwIKGExpc3RPcmdhbml6YXRpb25zUmVxdWVzdBIbCglwYWdlX3NpemUYASABKA1CCLpIBSoDGPoBEhwKCnBhZ2VfdG9rZW4YAiABKAlCCLpIBXIDGIAgEjEKCXVzZXJfcmVmcxgDIAMoCzIeLmJ1Zi5yZWdpc3RyeS5vd25lci52MS5Vc2VyUmVmEk4KBW9yZGVyGAQgASgOMjUuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLkxpc3RPcmdhbml6YXRpb25zUmVxdWVzdC5PcmRlckIIukgFggECEAEiVQoFT3JkZXISFQoRT1JERVJfVU5TUEVDSUZJRUQQABIaChZPUkRFUl9DUkVBVEVfVElNRV9ERVNDEAESGQoVT1JERVJfQ1JFQVRFX1RJTUVfQVNDEAIiegoZTGlzdE9yZ2FuaXphdGlvbnNSZXNwb25zZRIhCg9uZXh0X3BhZ2VfdG9rZW4YASABKAlCCLpIBXIDGIAgEjoKDW9yZ2FuaXphdGlvbnMYAiADKAsyIy5idWYucmVnaXN0cnkub3duZXIudjEuT3JnYW5pemF0aW9uIs0CChpDcmVhdGVPcmdhbml6YXRpb25zUmVxdWVzdBJUCgZ2YWx1ZXMYASADKAsyNy5idWYucmVnaXN0cnkub3duZXIudjEuQ3JlYXRlT3JnYW5pemF0aW9uc1JlcXVlc3QuVmFsdWVCC7pICJIBBQgBEPoBGtgBCgVWYWx1ZRI1CgRuYW1lGAEgASgJQie6SCTIAQFyHxACGCAyGV5bYS16XVthLXowLTktXSpbYS16MC05XSQSHQoLZGVzY3JpcHRpb24YAiABKAlCCLpIBXIDGN4CEhsKA3VybBgDIAEoCUIOukgL2AEBcgYY/wGIAQESXAoTdmVyaWZpY2F0aW9uX3N0YXR1cxgEIAEoDjI1LmJ1Zi5yZWdpc3RyeS5vd25lci52MS5Pcmdhbml6YXRpb25WZXJpZmljYXRpb25TdGF0dXNCCLpIBYIBAhABImMKG0NyZWF0ZU9yZ2FuaXphdGlvbnNSZXNwb25zZRJECg1vcmdhbml6YXRpb25zGAEgAygLMiMuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLk9yZ2FuaXphdGlvbkIIukgFkgECCAEiogMKGlVwZGF0ZU9yZ2FuaXphdGlvbnNSZXF1ZXN0ElQKBnZhbHVlcxgBIAMoCzI3LmJ1Zi5yZWdpc3RyeS5vd25lci52MS5VcGRhdGVPcmdhbml6YXRpb25zUmVxdWVzdC5WYWx1ZUILukgIkgEFCAEQ+gEarQIKBVZhbHVlEkgKEG9yZ2FuaXphdGlvbl9yZWYYASABKAsyJi5idWYucmVnaXN0cnkub3duZXIudjEuT3JnYW5pemF0aW9uUmVmQga6SAPIAQESIgoLZGVzY3JpcHRpb24YAiABKAlCCLpIBXIDGN4CSACIAQESIAoDdXJsGAMgASgJQg66SAvYAQJyBhj/AYgBAUgBiAEBEmQKE3ZlcmlmaWNhdGlvbl9zdGF0dXMYBCABKA4yNS5idWYucmVnaXN0cnkub3duZXIudjEuT3JnYW5pemF0aW9uVmVyaWZpY2F0aW9uU3RhdHVzQgu6SAiCAQUQASIBAEgCiAEBQg4KDF9kZXNjcmlwdGlvbkIGCgRfdXJsQhYKFF92ZXJpZmljYXRpb25fc3RhdHVzImMKG1VwZGF0ZU9yZ2FuaXphdGlvbnNSZXNwb25zZRJECg1vcmdhbml6YXRpb25zGAEgAygLMiMuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLk9yZ2FuaXphdGlvbkIIukgFkgECCAEibAoaRGVsZXRlT3JnYW5pemF0aW9uc1JlcXVlc3QSTgoRb3JnYW5pemF0aW9uX3JlZnMYASADKAsyJi5idWYucmVnaXN0cnkub3duZXIudjEuT3JnYW5pemF0aW9uUmVmQgu6SAiSAQUIARD6ASIdChtEZWxldGVPcmdhbml6YXRpb25zUmVzcG9uc2UymAUKE09yZ2FuaXphdGlvblNlcnZpY2USeAoQR2V0T3JnYW5pemF0aW9ucxIuLmJ1Zi5yZWdpc3RyeS5vd25lci52MS5HZXRPcmdhbml6YXRpb25zUmVxdWVzdBovLmJ1Zi5yZWdpc3RyeS5vd25lci52MS5HZXRPcmdhbml6YXRpb25zUmVzcG9uc2UiA5ACARJ7ChFMaXN0T3JnYW5pemF0aW9ucxIvLmJ1Zi5yZWdpc3RyeS5vd25lci52MS5MaXN0T3JnYW5pemF0aW9uc1JlcXVlc3QaMC5idWYucmVnaXN0cnkub3duZXIudjEuTGlzdE9yZ2FuaXphdGlvbnNSZXNwb25zZSIDkAIBEoEBChNDcmVhdGVPcmdhbml6YXRpb25zEjEuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLkNyZWF0ZU9yZ2FuaXphdGlvbnNSZXF1ZXN0GjIuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLkNyZWF0ZU9yZ2FuaXphdGlvbnNSZXNwb25zZSIDkAICEoEBChNVcGRhdGVPcmdhbml6YXRpb25zEjEuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLlVwZGF0ZU9yZ2FuaXphdGlvbnNSZXF1ZXN0GjIuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLlVwZGF0ZU9yZ2FuaXphdGlvbnNSZXNwb25zZSIDkAICEoEBChNEZWxldGVPcmdhbml6YXRpb25zEjEuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLkRlbGV0ZU9yZ2FuaXphdGlvbnNSZXF1ZXN0GjIuYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLkRlbGV0ZU9yZ2FuaXphdGlvbnNSZXNwb25zZSIDkAICQk1aS2J1Zi5idWlsZC9nZW4vZ28vYnVmYnVpbGQvcmVnaXN0cnkvcHJvdG9jb2xidWZmZXJzL2dvL2J1Zi9yZWdpc3RyeS9vd25lci92MWIGcHJvdG8z", [file_buf_registry_owner_v1_organization, file_buf_registry_owner_v1_user, file_buf_validate_validate]);

/**
 * @generated from message buf.registry.owner.v1.GetOrganizationsRequest
 */
export type GetOrganizationsRequest = Message<"buf.registry.owner.v1.GetOrganizationsRequest"> & {
  /**
   * The Organizations to request.
   *
   * @generated from field: repeated buf.registry.owner.v1.OrganizationRef organization_refs = 1;
   */
  organizationRefs: OrganizationRef[];
};

/**
 * Describes the message buf.registry.owner.v1.GetOrganizationsRequest.
 * Use `create(GetOrganizationsRequestSchema)` to create a new message.
 */
export const GetOrganizationsRequestSchema: GenMessage<GetOrganizationsRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 0);

/**
 * @generated from message buf.registry.owner.v1.GetOrganizationsResponse
 */
export type GetOrganizationsResponse = Message<"buf.registry.owner.v1.GetOrganizationsResponse"> & {
  /**
   * The retrieved Organizations in the same order as requested.
   *
   * @generated from field: repeated buf.registry.owner.v1.Organization organizations = 1;
   */
  organizations: Organization[];
};

/**
 * Describes the message buf.registry.owner.v1.GetOrganizationsResponse.
 * Use `create(GetOrganizationsResponseSchema)` to create a new message.
 */
export const GetOrganizationsResponseSchema: GenMessage<GetOrganizationsResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 1);

/**
 * @generated from message buf.registry.owner.v1.ListOrganizationsRequest
 */
export type ListOrganizationsRequest = Message<"buf.registry.owner.v1.ListOrganizationsRequest"> & {
  /**
   * The maximum number of items to return.
   *
   * The default value is 10.
   *
   * @generated from field: uint32 page_size = 1;
   */
  pageSize: number;

  /**
   * The page to start from.
   *
   * If empty, the first page is returned,
   *
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  /**
   * The ids of the specific Users to list Organizations for.
   *
   * If this is empty, all Organizations are listed, but this functionality
   * is limited to Users with the necessary permissions.
   *
   * @generated from field: repeated buf.registry.owner.v1.UserRef user_refs = 3;
   */
  userRefs: UserRef[];

  /**
   * The order to return the Organizations.
   *
   * If not specified, defaults to ORDER_CREATE_TIME_DESC.
   *
   * @generated from field: buf.registry.owner.v1.ListOrganizationsRequest.Order order = 4;
   */
  order: ListOrganizationsRequest_Order;
};

/**
 * Describes the message buf.registry.owner.v1.ListOrganizationsRequest.
 * Use `create(ListOrganizationsRequestSchema)` to create a new message.
 */
export const ListOrganizationsRequestSchema: GenMessage<ListOrganizationsRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 2);

/**
 * The list order.
 *
 * @generated from enum buf.registry.owner.v1.ListOrganizationsRequest.Order
 */
export enum ListOrganizationsRequest_Order {
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
}

/**
 * Describes the enum buf.registry.owner.v1.ListOrganizationsRequest.Order.
 */
export const ListOrganizationsRequest_OrderSchema: GenEnum<ListOrganizationsRequest_Order> = /*@__PURE__*/
  enumDesc(file_buf_registry_owner_v1_organization_service, 2, 0);

/**
 * @generated from message buf.registry.owner.v1.ListOrganizationsResponse
 */
export type ListOrganizationsResponse = Message<"buf.registry.owner.v1.ListOrganizationsResponse"> & {
  /**
   * The next page token.
   *
   * If empty, there are no more pages.
   *
   * @generated from field: string next_page_token = 1;
   */
  nextPageToken: string;

  /**
   * The listed Organizations.
   *
   * @generated from field: repeated buf.registry.owner.v1.Organization organizations = 2;
   */
  organizations: Organization[];
};

/**
 * Describes the message buf.registry.owner.v1.ListOrganizationsResponse.
 * Use `create(ListOrganizationsResponseSchema)` to create a new message.
 */
export const ListOrganizationsResponseSchema: GenMessage<ListOrganizationsResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 3);

/**
 * @generated from message buf.registry.owner.v1.CreateOrganizationsRequest
 */
export type CreateOrganizationsRequest = Message<"buf.registry.owner.v1.CreateOrganizationsRequest"> & {
  /**
   * The Organizations to create.
   *
   * @generated from field: repeated buf.registry.owner.v1.CreateOrganizationsRequest.Value values = 1;
   */
  values: CreateOrganizationsRequest_Value[];
};

/**
 * Describes the message buf.registry.owner.v1.CreateOrganizationsRequest.
 * Use `create(CreateOrganizationsRequestSchema)` to create a new message.
 */
export const CreateOrganizationsRequestSchema: GenMessage<CreateOrganizationsRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 4);

/**
 * An individual request to create an Organization.
 *
 * @generated from message buf.registry.owner.v1.CreateOrganizationsRequest.Value
 */
export type CreateOrganizationsRequest_Value = Message<"buf.registry.owner.v1.CreateOrganizationsRequest.Value"> & {
  /**
   * The name of the Organization.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The configurable description of the Organization.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * The configurable URL that represents the homepage for an Organization.
   *
   * @generated from field: string url = 3;
   */
  url: string;

  /**
   * The verification status of the Organization.
   *
   * If not set, the Organization will default to VERIFICATION_STATUS_UNVERIFIED.
   *
   * @generated from field: buf.registry.owner.v1.OrganizationVerificationStatus verification_status = 4;
   */
  verificationStatus: OrganizationVerificationStatus;
};

/**
 * Describes the message buf.registry.owner.v1.CreateOrganizationsRequest.Value.
 * Use `create(CreateOrganizationsRequest_ValueSchema)` to create a new message.
 */
export const CreateOrganizationsRequest_ValueSchema: GenMessage<CreateOrganizationsRequest_Value> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 4, 0);

/**
 * @generated from message buf.registry.owner.v1.CreateOrganizationsResponse
 */
export type CreateOrganizationsResponse = Message<"buf.registry.owner.v1.CreateOrganizationsResponse"> & {
  /**
   * The created Organizations in the same order as given on the request.
   *
   * @generated from field: repeated buf.registry.owner.v1.Organization organizations = 1;
   */
  organizations: Organization[];
};

/**
 * Describes the message buf.registry.owner.v1.CreateOrganizationsResponse.
 * Use `create(CreateOrganizationsResponseSchema)` to create a new message.
 */
export const CreateOrganizationsResponseSchema: GenMessage<CreateOrganizationsResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 5);

/**
 * @generated from message buf.registry.owner.v1.UpdateOrganizationsRequest
 */
export type UpdateOrganizationsRequest = Message<"buf.registry.owner.v1.UpdateOrganizationsRequest"> & {
  /**
   * The Organizations to update.
   *
   * @generated from field: repeated buf.registry.owner.v1.UpdateOrganizationsRequest.Value values = 1;
   */
  values: UpdateOrganizationsRequest_Value[];
};

/**
 * Describes the message buf.registry.owner.v1.UpdateOrganizationsRequest.
 * Use `create(UpdateOrganizationsRequestSchema)` to create a new message.
 */
export const UpdateOrganizationsRequestSchema: GenMessage<UpdateOrganizationsRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 6);

/**
 * An individual request to update an Organization.
 *
 * @generated from message buf.registry.owner.v1.UpdateOrganizationsRequest.Value
 */
export type UpdateOrganizationsRequest_Value = Message<"buf.registry.owner.v1.UpdateOrganizationsRequest.Value"> & {
  /**
   * The organization to update.
   *
   * @generated from field: buf.registry.owner.v1.OrganizationRef organization_ref = 1;
   */
  organizationRef?: OrganizationRef;

  /**
   * The configurable description of the Organization.
   *
   * @generated from field: optional string description = 2;
   */
  description?: string;

  /**
   * The configurable URL that represents the homepage for an Organization.
   *
   * @generated from field: optional string url = 3;
   */
  url?: string;

  /**
   * The verification status of the Organization.
   *
   * @generated from field: optional buf.registry.owner.v1.OrganizationVerificationStatus verification_status = 4;
   */
  verificationStatus?: OrganizationVerificationStatus;
};

/**
 * Describes the message buf.registry.owner.v1.UpdateOrganizationsRequest.Value.
 * Use `create(UpdateOrganizationsRequest_ValueSchema)` to create a new message.
 */
export const UpdateOrganizationsRequest_ValueSchema: GenMessage<UpdateOrganizationsRequest_Value> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 6, 0);

/**
 * @generated from message buf.registry.owner.v1.UpdateOrganizationsResponse
 */
export type UpdateOrganizationsResponse = Message<"buf.registry.owner.v1.UpdateOrganizationsResponse"> & {
  /**
   * The updated Organizations in the same order as given on the request.
   *
   * @generated from field: repeated buf.registry.owner.v1.Organization organizations = 1;
   */
  organizations: Organization[];
};

/**
 * Describes the message buf.registry.owner.v1.UpdateOrganizationsResponse.
 * Use `create(UpdateOrganizationsResponseSchema)` to create a new message.
 */
export const UpdateOrganizationsResponseSchema: GenMessage<UpdateOrganizationsResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 7);

/**
 * @generated from message buf.registry.owner.v1.DeleteOrganizationsRequest
 */
export type DeleteOrganizationsRequest = Message<"buf.registry.owner.v1.DeleteOrganizationsRequest"> & {
  /**
   * The Organizations to delete.
   *
   * @generated from field: repeated buf.registry.owner.v1.OrganizationRef organization_refs = 1;
   */
  organizationRefs: OrganizationRef[];
};

/**
 * Describes the message buf.registry.owner.v1.DeleteOrganizationsRequest.
 * Use `create(DeleteOrganizationsRequestSchema)` to create a new message.
 */
export const DeleteOrganizationsRequestSchema: GenMessage<DeleteOrganizationsRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 8);

/**
 * @generated from message buf.registry.owner.v1.DeleteOrganizationsResponse
 */
export type DeleteOrganizationsResponse = Message<"buf.registry.owner.v1.DeleteOrganizationsResponse"> & {
};

/**
 * Describes the message buf.registry.owner.v1.DeleteOrganizationsResponse.
 * Use `create(DeleteOrganizationsResponseSchema)` to create a new message.
 */
export const DeleteOrganizationsResponseSchema: GenMessage<DeleteOrganizationsResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_organization_service, 9);

/**
 * Operate on Organizations
 *
 * @generated from service buf.registry.owner.v1.OrganizationService
 */
export const OrganizationService: GenService<{
  /**
   * Get Organizations by id or name.
   *
   * @generated from rpc buf.registry.owner.v1.OrganizationService.GetOrganizations
   */
  getOrganizations: {
    methodKind: "unary";
    input: typeof GetOrganizationsRequestSchema;
    output: typeof GetOrganizationsResponseSchema;
  },
  /**
   * List Organizations, usually by User.
   *
   * @generated from rpc buf.registry.owner.v1.OrganizationService.ListOrganizations
   */
  listOrganizations: {
    methodKind: "unary";
    input: typeof ListOrganizationsRequestSchema;
    output: typeof ListOrganizationsResponseSchema;
  },
  /**
   * Create new Organizations.
   *
   * This operation is atomic. Either all Organizations are created or an error is returned.
   *
   * @generated from rpc buf.registry.owner.v1.OrganizationService.CreateOrganizations
   */
  createOrganizations: {
    methodKind: "unary";
    input: typeof CreateOrganizationsRequestSchema;
    output: typeof CreateOrganizationsResponseSchema;
  },
  /**
   * Update existing organizations.
   *
   * This operation is atomic. Either all Organizations are updated or an error is returned.
   *
   * @generated from rpc buf.registry.owner.v1.OrganizationService.UpdateOrganizations
   */
  updateOrganizations: {
    methodKind: "unary";
    input: typeof UpdateOrganizationsRequestSchema;
    output: typeof UpdateOrganizationsResponseSchema;
  },
  /**
   * Delete existing organizations.
   *
   * This operation is atomic. Either all Organizations are deleted or an error is returned.
   *
   * @generated from rpc buf.registry.owner.v1.OrganizationService.DeleteOrganizations
   */
  deleteOrganizations: {
    methodKind: "unary";
    input: typeof DeleteOrganizationsRequestSchema;
    output: typeof DeleteOrganizationsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_buf_registry_owner_v1_organization_service, 0);

