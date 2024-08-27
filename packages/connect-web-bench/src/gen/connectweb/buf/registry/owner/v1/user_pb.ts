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
// @generated from file buf/registry/owner/v1/user.proto (package buf.registry.owner.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_registry_priv_extension_v1beta1_extension } from "../../priv/extension/v1beta1/extension_pb";
import { file_buf_validate_validate } from "../../../validate/validate_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/registry/owner/v1/user.proto.
 */
export const file_buf_registry_owner_v1_user: GenFile = /*@__PURE__*/
  fileDesc("CiBidWYvcmVnaXN0cnkvb3duZXIvdjEvdXNlci5wcm90bxIVYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxIt8DCgRVc2VyEhcKAmlkGAEgASgJQgu6SAjIAQFyA4gCARI3CgtjcmVhdGVfdGltZRgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCBrpIA8gBARI3Cgt1cGRhdGVfdGltZRgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCBrpIA8gBARI1CgRuYW1lGAQgASgJQie6SCTIAQFyHxACGCAyGV5bYS16XVthLXowLTktXSpbYS16MC05XSQSOgoEdHlwZRgFIAEoDjIfLmJ1Zi5yZWdpc3RyeS5vd25lci52MS5Vc2VyVHlwZUILukgIyAEBggECEAESPAoFc3RhdGUYBiABKA4yIC5idWYucmVnaXN0cnkub3duZXIudjEuVXNlclN0YXRlQgu6SAjIAQGCAQIQARIdCgtkZXNjcmlwdGlvbhgHIAEoCUIIukgFcgMY3gISGwoDdXJsGAggASgJQg66SAvYAQFyBhj/AYgBARJXChN2ZXJpZmljYXRpb25fc3RhdHVzGAkgASgOMi0uYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLlVzZXJWZXJpZmljYXRpb25TdGF0dXNCC7pICMgBAYIBAhABOgbqxSsCEAEibwoHVXNlclJlZhIWCgJpZBgBIAEoCUIIukgFcgOIAgFIABI0CgRuYW1lGAIgASgJQiS6SCFyHxACGCAyGV5bYS16XVthLXowLTktXSpbYS16MC05XSRIADoG6sUrAggBQg4KBXZhbHVlEgW6SAIIASpXCglVc2VyU3RhdGUSGgoWVVNFUl9TVEFURV9VTlNQRUNJRklFRBAAEhUKEVVTRVJfU1RBVEVfQUNUSVZFEAESFwoTVVNFUl9TVEFURV9JTkFDVElWRRACKmYKCFVzZXJUeXBlEhkKFVVTRVJfVFlQRV9VTlNQRUNJRklFRBAAEhYKElVTRVJfVFlQRV9TVEFOREFSRBABEhEKDVVTRVJfVFlQRV9CT1QQAhIUChBVU0VSX1RZUEVfU1lTVEVNEAMquQEKFlVzZXJWZXJpZmljYXRpb25TdGF0dXMSKAokVVNFUl9WRVJJRklDQVRJT05fU1RBVFVTX1VOU1BFQ0lGSUVEEAASJwojVVNFUl9WRVJJRklDQVRJT05fU1RBVFVTX1VOVkVSSUZJRUQQARIlCiFVU0VSX1ZFUklGSUNBVElPTl9TVEFUVVNfVkVSSUZJRUQQAhIlCiFVU0VSX1ZFUklGSUNBVElPTl9TVEFUVVNfT0ZGSUNJQUwQA0JNWktidWYuYnVpbGQvZ2VuL2dvL2J1ZmJ1aWxkL3JlZ2lzdHJ5L3Byb3RvY29sYnVmZmVycy9nby9idWYvcmVnaXN0cnkvb3duZXIvdjFiBnByb3RvMw", [file_buf_registry_priv_extension_v1beta1_extension, file_buf_validate_validate, file_google_protobuf_timestamp]);

/**
 * A user on the BSR.
 *
 * A name uniquely identifies a User, however name is mutable.
 *
 * @generated from message buf.registry.owner.v1.User
 */
export type User = Message<"buf.registry.owner.v1.User"> & {
  /**
   * The id for the User.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The time the User was created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * The last time the User was updated.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;

  /**
   * The name of the User.
   *
   * A name uniquely identifies a User, however name is mutable.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * The type of the User.
   *
   * @generated from field: buf.registry.owner.v1.UserType type = 5;
   */
  type: UserType;

  /**
   * The state of the User.
   *
   * @generated from field: buf.registry.owner.v1.UserState state = 6;
   */
  state: UserState;

  /**
   * The configurable description of the User.
   *
   * @generated from field: string description = 7;
   */
  description: string;

  /**
   * The configurable URL that represents the homepage for a User.
   *
   * @generated from field: string url = 8;
   */
  url: string;

  /**
   * The verification status of the User.
   *
   * @generated from field: buf.registry.owner.v1.UserVerificationStatus verification_status = 9;
   */
  verificationStatus: UserVerificationStatus;
};

/**
 * Describes the message buf.registry.owner.v1.User.
 * Use `create(UserSchema)` to create a new message.
 */
export const UserSchema: GenMessage<User> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_user, 0);

/**
 * UserRef is a reference to a User, either an id or a name.
 *
 * This is used in requests.
 *
 * @generated from message buf.registry.owner.v1.UserRef
 */
export type UserRef = Message<"buf.registry.owner.v1.UserRef"> & {
  /**
   * @generated from oneof buf.registry.owner.v1.UserRef.value
   */
  value: {
    /**
     * The id of the User.
     *
     * @generated from field: string id = 1;
     */
    value: string;
    case: "id";
  } | {
    /**
     * The name of the User.
     *
     * @generated from field: string name = 2;
     */
    value: string;
    case: "name";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message buf.registry.owner.v1.UserRef.
 * Use `create(UserRefSchema)` to create a new message.
 */
export const UserRefSchema: GenMessage<UserRef> = /*@__PURE__*/
  messageDesc(file_buf_registry_owner_v1_user, 1);

/**
 * The state of the a User, either active or inactive.
 *
 * @generated from enum buf.registry.owner.v1.UserState
 */
export enum UserState {
  /**
   * @generated from enum value: USER_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: USER_STATE_ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * @generated from enum value: USER_STATE_INACTIVE = 2;
   */
  INACTIVE = 2,
}

/**
 * Describes the enum buf.registry.owner.v1.UserState.
 */
export const UserStateSchema: GenEnum<UserState> = /*@__PURE__*/
  enumDesc(file_buf_registry_owner_v1_user, 0);

/**
 * The type of a User.
 *
 * @generated from enum buf.registry.owner.v1.UserType
 */
export enum UserType {
  /**
   * @generated from enum value: USER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Users that are standard users.
   *
   * @generated from enum value: USER_TYPE_STANDARD = 1;
   */
  STANDARD = 1,

  /**
   * Users that are bots.
   *
   * @generated from enum value: USER_TYPE_BOT = 2;
   */
  BOT = 2,

  /**
   * Users that are internal system users.
   *
   * @generated from enum value: USER_TYPE_SYSTEM = 3;
   */
  SYSTEM = 3,
}

/**
 * Describes the enum buf.registry.owner.v1.UserType.
 */
export const UserTypeSchema: GenEnum<UserType> = /*@__PURE__*/
  enumDesc(file_buf_registry_owner_v1_user, 1);

/**
 * The verification status of an User.
 *
 * @generated from enum buf.registry.owner.v1.UserVerificationStatus
 */
export enum UserVerificationStatus {
  /**
   * @generated from enum value: USER_VERIFICATION_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * The User is unverified.
   *
   * @generated from enum value: USER_VERIFICATION_STATUS_UNVERIFIED = 1;
   */
  UNVERIFIED = 1,

  /**
   * The User is verified.
   *
   * @generated from enum value: USER_VERIFICATION_STATUS_VERIFIED = 2;
   */
  VERIFIED = 2,

  /**
   * The User is an official user of the BSR owner.
   *
   * @generated from enum value: USER_VERIFICATION_STATUS_OFFICIAL = 3;
   */
  OFFICIAL = 3,
}

/**
 * Describes the enum buf.registry.owner.v1.UserVerificationStatus.
 */
export const UserVerificationStatusSchema: GenEnum<UserVerificationStatus> = /*@__PURE__*/
  enumDesc(file_buf_registry_owner_v1_user, 2);

