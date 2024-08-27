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
// @generated from file buf/registry/module/v1beta1/upload_service.proto (package buf.registry.module.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Commit } from "./commit_pb";
import { file_buf_registry_module_v1beta1_commit } from "./commit_pb";
import type { File } from "./file_pb";
import { file_buf_registry_module_v1beta1_file } from "./file_pb";
import type { ScopedLabelRef } from "./label_pb";
import { file_buf_registry_module_v1beta1_label } from "./label_pb";
import type { ModuleRef } from "./module_pb";
import { file_buf_registry_module_v1beta1_module } from "./module_pb";
import { file_buf_validate_validate } from "../../../validate/validate_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/registry/module/v1beta1/upload_service.proto.
 */
export const file_buf_registry_module_v1beta1_upload_service: GenFile = /*@__PURE__*/
  fileDesc("CjBidWYvcmVnaXN0cnkvbW9kdWxlL3YxYmV0YTEvdXBsb2FkX3NlcnZpY2UucHJvdG8SG2J1Zi5yZWdpc3RyeS5tb2R1bGUudjFiZXRhMSLoAwoNVXBsb2FkUmVxdWVzdBJOCghjb250ZW50cxgBIAMoCzIyLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjFiZXRhMS5VcGxvYWRSZXF1ZXN0LkNvbnRlbnRCCLpIBZIBAggBEkMKCGRlcF9yZWZzGAIgAygLMjEuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MWJldGExLlVwbG9hZFJlcXVlc3QuRGVwUmVmGkIKBkRlcFJlZhIeCgljb21taXRfaWQYASABKAlCC7pICMgBAXIDiAIBEhgKCHJlZ2lzdHJ5GAIgASgJQga6SAPIAQEa/QEKB0NvbnRlbnQSQgoKbW9kdWxlX3JlZhgBIAEoCzImLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjFiZXRhMS5Nb2R1bGVSZWZCBrpIA8gBARI6CgVmaWxlcxgCIAMoCzIhLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjFiZXRhMS5GaWxlQgi6SAWSAQIIARJGChFzY29wZWRfbGFiZWxfcmVmcxgDIAMoCzIrLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjFiZXRhMS5TY29wZWRMYWJlbFJlZhIqChJzb3VyY2VfY29udHJvbF91cmwYBCABKAlCDrpIC9gBAXIGGP8BiAEBIlAKDlVwbG9hZFJlc3BvbnNlEj4KB2NvbW1pdHMYASADKAsyIy5idWYucmVnaXN0cnkubW9kdWxlLnYxYmV0YTEuQ29tbWl0Qgi6SAWSAQIIATJ0Cg1VcGxvYWRTZXJ2aWNlEmMKBlVwbG9hZBIqLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjFiZXRhMS5VcGxvYWRSZXF1ZXN0GisuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MWJldGExLlVwbG9hZFJlc3BvbnNlIgBCU1pRYnVmLmJ1aWxkL2dlbi9nby9idWZidWlsZC9yZWdpc3RyeS9wcm90b2NvbGJ1ZmZlcnMvZ28vYnVmL3JlZ2lzdHJ5L21vZHVsZS92MWJldGExYgZwcm90bzM", [file_buf_registry_module_v1beta1_commit, file_buf_registry_module_v1beta1_file, file_buf_registry_module_v1beta1_label, file_buf_registry_module_v1beta1_module, file_buf_validate_validate]);

/**
 * @generated from message buf.registry.module.v1beta1.UploadRequest
 */
export type UploadRequest = Message<"buf.registry.module.v1beta1.UploadRequest"> & {
  /**
   * The Contents of all references.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.UploadRequest.Content contents = 1;
   */
  contents: UploadRequest_Content[];

  /**
   * The dependencies of the references specified by Contents.
   *
   * This will include all transitive dependencies.
   *
   * Dependencies between Contents are implicit and do not need to be specified. The BSR will detect
   * dependencies between Contents via .proto imports.
   *
   * Commits should be unique by Module, that is no two dep_refs should have the same Module but
   * different Commit IDs.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.UploadRequest.DepRef dep_refs = 2;
   */
  depRefs: UploadRequest_DepRef[];
};

/**
 * Describes the message buf.registry.module.v1beta1.UploadRequest.
 * Use `create(UploadRequestSchema)` to create a new message.
 */
export const UploadRequestSchema: GenMessage<UploadRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_upload_service, 0);

/**
 * A dependency of one or more references specified by Contents.
 *
 * Dependencies between Contents are implicit and do not need to be specified. The BSR will detect
 * dependencies between Contents via .proto imports.
 *
 * @generated from message buf.registry.module.v1beta1.UploadRequest.DepRef
 */
export type UploadRequest_DepRef = Message<"buf.registry.module.v1beta1.UploadRequest.DepRef"> & {
  /**
   * The commit_id of the dependency.
   *
   * @generated from field: string commit_id = 1;
   */
  commitId: string;

  /**
   * The registry hostname of the dependency.
   *
   * @generated from field: string registry = 2;
   */
  registry: string;
};

/**
 * Describes the message buf.registry.module.v1beta1.UploadRequest.DepRef.
 * Use `create(UploadRequest_DepRefSchema)` to create a new message.
 */
export const UploadRequest_DepRefSchema: GenMessage<UploadRequest_DepRef> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_upload_service, 0, 0);

/**
 * Content to upload for a given reference.
 *
 * @generated from message buf.registry.module.v1beta1.UploadRequest.Content
 */
export type UploadRequest_Content = Message<"buf.registry.module.v1beta1.UploadRequest.Content"> & {
  /**
   * The Module of the reference.
   *
   * @generated from field: buf.registry.module.v1beta1.ModuleRef module_ref = 1;
   */
  moduleRef?: ModuleRef;

  /**
   * The Files of the Content.
   *
   * This will consist of the .proto files, license files, and documentation files.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.File files = 2;
   */
  files: File[];

  /**
   * The labels to associate with the Commit for the Content.
   *
   * If an id is set, this id must represent a Label that already exists and is
   * owned by the Module. The Label will point to the newly-created Commits for the References,
   * or will be updated to point to the pre-existing Commit for the Reference.
   *
   * If no labels are referenced, the default Label for the Module is used.
   *
   * If the Labels do not exist, they will be created.
   * If the Labels were archived, they will be unarchived.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.ScopedLabelRef scoped_label_refs = 3;
   */
  scopedLabelRefs: ScopedLabelRef[];

  /**
   * The URL of the source control commit to associate with the Commit for this Content.
   *
   * BSR users can navigate to this link to find source control information that is relevant to this Commit
   * (e.g. commit description, PR discussion, authors, approvers, etc.).
   *
   * @generated from field: string source_control_url = 4;
   */
  sourceControlUrl: string;
};

/**
 * Describes the message buf.registry.module.v1beta1.UploadRequest.Content.
 * Use `create(UploadRequest_ContentSchema)` to create a new message.
 */
export const UploadRequest_ContentSchema: GenMessage<UploadRequest_Content> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_upload_service, 0, 1);

/**
 * See the package documentation for more details. You should likely use buf.registry.module.v1beta1
 * and not this package.
 *
 * @generated from message buf.registry.module.v1beta1.UploadResponse
 */
export type UploadResponse = Message<"buf.registry.module.v1beta1.UploadResponse"> & {
  /**
   * The Commits for each reference in the same order as given on the request.
   *
   * A single Commit will be returned for each reference. These Commits may or may not be new.
   * If nothing changed for a given reference, the existing Commit will be returned.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.Commit commits = 1;
   */
  commits: Commit[];
};

/**
 * Describes the message buf.registry.module.v1beta1.UploadResponse.
 * Use `create(UploadResponseSchema)` to create a new message.
 */
export const UploadResponseSchema: GenMessage<UploadResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_upload_service, 1);

/**
 * Upload contents.
 *
 * @generated from service buf.registry.module.v1beta1.UploadService
 */
export const UploadService: GenService<{
  /**
   * Upload contents for given set of Modules.
   *
   * Content consists of the Files: .proto files, license files, and documentation files.
   *
   * @generated from rpc buf.registry.module.v1beta1.UploadService.Upload
   */
  upload: {
    methodKind: "unary";
    input: typeof UploadRequestSchema;
    output: typeof UploadResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_buf_registry_module_v1beta1_upload_service, 0);

