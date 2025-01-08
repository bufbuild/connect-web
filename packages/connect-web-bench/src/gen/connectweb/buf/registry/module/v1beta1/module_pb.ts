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

// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file buf/registry/module/v1beta1/module.proto (package buf.registry.module.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_registry_priv_extension_v1beta1_extension } from "../../priv/extension/v1beta1/extension_pb";
import { file_buf_validate_validate } from "../../../validate/validate_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/registry/module/v1beta1/module.proto.
 */
export const file_buf_registry_module_v1beta1_module: GenFile = /*@__PURE__*/
  fileDesc("CihidWYvcmVnaXN0cnkvbW9kdWxlL3YxYmV0YTEvbW9kdWxlLnByb3RvEhtidWYucmVnaXN0cnkubW9kdWxlLnYxYmV0YTEizgMKBk1vZHVsZRIXCgJpZBgBIAEoCUILukgIyAEBcgOIAgESNwoLY3JlYXRlX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQga6SAPIAQESNwoLdXBkYXRlX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQga6SAPIAQESFwoEbmFtZRgEIAEoCUIJukgGcgQQAhhkEh0KCG93bmVyX2lkGAUgASgJQgu6SAjIAQFyA4gCARJOCgp2aXNpYmlsaXR5GAYgASgOMi0uYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MWJldGExLk1vZHVsZVZpc2liaWxpdHlCC7pICMgBAYIBAhABEkQKBXN0YXRlGAcgASgOMiguYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MWJldGExLk1vZHVsZVN0YXRlQgu6SAjIAQGCAQIQARIdCgtkZXNjcmlwdGlvbhgIIAEoCUIIukgFcgMY3gISGwoDdXJsGAkgASgJQg66SAvYAQFyBhj/AYgBARInChJkZWZhdWx0X2xhYmVsX25hbWUYCiABKAlCC7pICMgBAXIDGPoBOgbqxSsCEAEitgEKCU1vZHVsZVJlZhIWCgJpZBgBIAEoCUIIukgFcgOIAgFIABI7CgRuYW1lGAIgASgLMisuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MWJldGExLk1vZHVsZVJlZi5OYW1lSAAaPAoETmFtZRIZCgVvd25lchgBIAEoCUIKukgHyAEBcgIYIBIZCgZtb2R1bGUYAiABKAlCCbpIBnIEEAIYZDoG6sUrAggBQg4KBXZhbHVlEgW6SAIIASpyChBNb2R1bGVWaXNpYmlsaXR5EiEKHU1PRFVMRV9WSVNJQklMSVRZX1VOU1BFQ0lGSUVEEAASHAoYTU9EVUxFX1ZJU0lCSUxJVFlfUFVCTElDEAESHQoZTU9EVUxFX1ZJU0lCSUxJVFlfUFJJVkFURRACKmEKC01vZHVsZVN0YXRlEhwKGE1PRFVMRV9TVEFURV9VTlNQRUNJRklFRBAAEhcKE01PRFVMRV9TVEFURV9BQ1RJVkUQARIbChdNT0RVTEVfU1RBVEVfREVQUkVDQVRFRBACQlNaUWJ1Zi5idWlsZC9nZW4vZ28vYnVmYnVpbGQvcmVnaXN0cnkvcHJvdG9jb2xidWZmZXJzL2dvL2J1Zi9yZWdpc3RyeS9tb2R1bGUvdjFiZXRhMWIGcHJvdG8z", [file_buf_registry_priv_extension_v1beta1_extension, file_buf_validate_validate, file_google_protobuf_timestamp]);

/**
 * A module within the BSR.
 *
 * @generated from message buf.registry.module.v1beta1.Module
 */
export type Module = Message<"buf.registry.module.v1beta1.Module"> & {
  /**
   * The id of the Module.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The time the Module was created on the BSR.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * The last time the Module was updated on the BSR.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;

  /**
   * The name of the Module.
   *
   * Unique within a given User or Organization.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * The id of the User or Organization that owns the Module.
   *
   * @generated from field: string owner_id = 5;
   */
  ownerId: string;

  /**
   * The Module's visibility, either public or private.
   *
   * @generated from field: buf.registry.module.v1beta1.ModuleVisibility visibility = 6;
   */
  visibility: ModuleVisibility;

  /**
   * The Module state, either active or deprecated.
   *
   * @generated from field: buf.registry.module.v1beta1.ModuleState state = 7;
   */
  state: ModuleState;

  /**
   * The configurable description of the Module.
   *
   * @generated from field: string description = 8;
   */
  description: string;

  /**
   * The configurable URL in the description of the Module,
   *
   * @generated from field: string url = 9;
   */
  url: string;

  /**
   * The name of the default Label of the Module.
   *
   * This Label may not yet exist. When a Module is created, it has no Commits, and Labels
   * must have a Commit, so this Label is not created when a Module is created. Additionally,
   * a User may modify the name of the default Label without this Label yet being created.
   *
   * This could also be the name of an archived Label.
   *
   * @generated from field: string default_label_name = 10;
   */
  defaultLabelName: string;
};

/**
 * Describes the message buf.registry.module.v1beta1.Module.
 * Use `create(ModuleSchema)` to create a new message.
 */
export const ModuleSchema: GenMessage<Module> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_module, 0);

/**
 * ModuleRef is a reference to a Module, either an id or a fully-qualified name.
 *
 * This is used in requests.
 *
 * @generated from message buf.registry.module.v1beta1.ModuleRef
 */
export type ModuleRef = Message<"buf.registry.module.v1beta1.ModuleRef"> & {
  /**
   * @generated from oneof buf.registry.module.v1beta1.ModuleRef.value
   */
  value: {
    /**
     * The id of the Module.
     *
     * @generated from field: string id = 1;
     */
    value: string;
    case: "id";
  } | {
    /**
     * The fully-qualified name of the Module.
     *
     * @generated from field: buf.registry.module.v1beta1.ModuleRef.Name name = 2;
     */
    value: ModuleRef_Name;
    case: "name";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message buf.registry.module.v1beta1.ModuleRef.
 * Use `create(ModuleRefSchema)` to create a new message.
 */
export const ModuleRefSchema: GenMessage<ModuleRef> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_module, 1);

/**
 * The fully-qualified name of a Module within a BSR instance.
 *
 * A Name uniquely identifies a Module.
 * This is used for requests when a caller only has the module name and not the ID.
 *
 * @generated from message buf.registry.module.v1beta1.ModuleRef.Name
 */
export type ModuleRef_Name = Message<"buf.registry.module.v1beta1.ModuleRef.Name"> & {
  /**
   * The name of the owner of the Module, either a User or Organization.
   *
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * The name of the Module.
   *
   * @generated from field: string module = 2;
   */
  module: string;
};

/**
 * Describes the message buf.registry.module.v1beta1.ModuleRef.Name.
 * Use `create(ModuleRef_NameSchema)` to create a new message.
 */
export const ModuleRef_NameSchema: GenMessage<ModuleRef_Name> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_module, 1, 0);

/**
 * The visibility of a Module, currently either public or private.
 *
 * @generated from enum buf.registry.module.v1beta1.ModuleVisibility
 */
export enum ModuleVisibility {
  /**
   * @generated from enum value: MODULE_VISIBILITY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * MODULE_VISIBILITY_PUBLIC says that the module is publicly available.
   *
   * @generated from enum value: MODULE_VISIBILITY_PUBLIC = 1;
   */
  PUBLIC = 1,

  /**
   * MODULE_VISIBILITY_PRIVATE says that the module is private.
   *
   * @generated from enum value: MODULE_VISIBILITY_PRIVATE = 2;
   */
  PRIVATE = 2,
}

/**
 * Describes the enum buf.registry.module.v1beta1.ModuleVisibility.
 */
export const ModuleVisibilitySchema: GenEnum<ModuleVisibility> = /*@__PURE__*/
  enumDesc(file_buf_registry_module_v1beta1_module, 0);

/**
 * The state of a Module, currently either active or deprecated.
 *
 * @generated from enum buf.registry.module.v1beta1.ModuleState
 */
export enum ModuleState {
  /**
   * @generated from enum value: MODULE_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * MODULE_STATE_ACTIVE says that the Module is currently active.
   *
   * @generated from enum value: MODULE_STATE_ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * MODULE_STATE_DEPRECATED says that the Module has been deprecated and should not longer be
   * used.
   *
   * @generated from enum value: MODULE_STATE_DEPRECATED = 2;
   */
  DEPRECATED = 2,
}

/**
 * Describes the enum buf.registry.module.v1beta1.ModuleState.
 */
export const ModuleStateSchema: GenEnum<ModuleState> = /*@__PURE__*/
  enumDesc(file_buf_registry_module_v1beta1_module, 1);

