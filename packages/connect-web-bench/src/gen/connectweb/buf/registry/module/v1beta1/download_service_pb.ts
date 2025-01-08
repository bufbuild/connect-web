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
// @generated from file buf/registry/module/v1beta1/download_service.proto (package buf.registry.module.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Commit } from "./commit_pb";
import { file_buf_registry_module_v1beta1_commit } from "./commit_pb";
import type { DigestType } from "./digest_pb";
import { file_buf_registry_module_v1beta1_digest } from "./digest_pb";
import type { File, FileType } from "./file_pb";
import { file_buf_registry_module_v1beta1_file } from "./file_pb";
import type { ResourceRef } from "./resource_pb";
import { file_buf_registry_module_v1beta1_resource } from "./resource_pb";
import { file_buf_validate_validate } from "../../../validate/validate_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/registry/module/v1beta1/download_service.proto.
 */
export const file_buf_registry_module_v1beta1_download_service: GenFile = /*@__PURE__*/
  fileDesc("CjJidWYvcmVnaXN0cnkvbW9kdWxlL3YxYmV0YTEvZG93bmxvYWRfc2VydmljZS5wcm90bxIbYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MWJldGExItIDCg9Eb3dubG9hZFJlcXVlc3QSTwoGdmFsdWVzGAEgAygLMjIuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MWJldGExLkRvd25sb2FkUmVxdWVzdC5WYWx1ZUILukgIkgEFCAEQ+gESRgoLZGlnZXN0X3R5cGUYAiABKA4yJy5idWYucmVnaXN0cnkubW9kdWxlLnYxYmV0YTEuRGlnZXN0VHlwZUIIukgFggECEAEapQIKBVZhbHVlEkYKDHJlc291cmNlX3JlZhgBIAEoCzIoLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjFiZXRhMS5SZXNvdXJjZVJlZkIGukgDyAEBEk0KCmZpbGVfdHlwZXMYAiADKA4yJS5idWYucmVnaXN0cnkubW9kdWxlLnYxYmV0YTEuRmlsZVR5cGVCErpID5IBDBgBIgiCAQUQASIBABJmCgVwYXRocxgDIAMoCUJXukhUkgFRIk9yTRiAIDJEXihbXi8uXVteL10/fFteL11bXi8uXXxbXi9dezMsfSkoLyhbXi8uXVteL10/fFteL11bXi8uXXxbXi9dezMsfSkpKiS6AQFcEh0KFXBhdGhzX2FsbG93X25vdF9leGlzdBgEIAEoCCLaAgoQRG93bmxvYWRSZXNwb25zZRJRCghjb250ZW50cxgBIAMoCzI1LmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjFiZXRhMS5Eb3dubG9hZFJlc3BvbnNlLkNvbnRlbnRCCLpIBZIBAggBGvIBCgdDb250ZW50EjsKBmNvbW1pdBgBIAEoCzIjLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjFiZXRhMS5Db21taXRCBrpIA8gBARIwCgVmaWxlcxgCIAMoCzIhLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjFiZXRhMS5GaWxlEjsKEHYxX2J1Zl95YW1sX2ZpbGUYAyABKAsyIS5idWYucmVnaXN0cnkubW9kdWxlLnYxYmV0YTEuRmlsZRI7ChB2MV9idWZfbG9ja19maWxlGAQgASgLMiEuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MWJldGExLkZpbGUyfwoPRG93bmxvYWRTZXJ2aWNlEmwKCERvd25sb2FkEiwuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MWJldGExLkRvd25sb2FkUmVxdWVzdBotLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjFiZXRhMS5Eb3dubG9hZFJlc3BvbnNlIgOQAgFCU1pRYnVmLmJ1aWxkL2dlbi9nby9idWZidWlsZC9yZWdpc3RyeS9wcm90b2NvbGJ1ZmZlcnMvZ28vYnVmL3JlZ2lzdHJ5L21vZHVsZS92MWJldGExYgZwcm90bzM", [file_buf_registry_module_v1beta1_commit, file_buf_registry_module_v1beta1_digest, file_buf_registry_module_v1beta1_file, file_buf_registry_module_v1beta1_resource, file_buf_validate_validate]);

/**
 * @generated from message buf.registry.module.v1beta1.DownloadRequest
 */
export type DownloadRequest = Message<"buf.registry.module.v1beta1.DownloadRequest"> & {
  /**
   * The references to get contents for.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.DownloadRequest.Value values = 1;
   */
  values: DownloadRequest_Value[];

  /**
   * The DigestType to return for the Commits of the references.
   *
   * If this DigestType is not available, an error is returned.
   * Note that certain DigestTypes may be deprecated over time.
   *
   * If not set, the latest DigestType is used, currently B5.
   *
   * @generated from field: buf.registry.module.v1beta1.DigestType digest_type = 2;
   */
  digestType: DigestType;
};

/**
 * Describes the message buf.registry.module.v1beta1.DownloadRequest.
 * Use `create(DownloadRequestSchema)` to create a new message.
 */
export const DownloadRequestSchema: GenMessage<DownloadRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_download_service, 0);

/**
 * A request for content for a single reference.
 *
 * @generated from message buf.registry.module.v1beta1.DownloadRequest.Value
 */
export type DownloadRequest_Value = Message<"buf.registry.module.v1beta1.DownloadRequest.Value"> & {
  /**
   * The reference to get content for.
   *
   * See the documentation on ResourceRef for resource resolution details.
   *
   * Once the resource is resolved, the following content is returned:
   *   - If a Module is referenced, the content of the Commit of the default Label is returned.
   *   - If a Label is referenced, the content of the Commit of this Label is returned.
   *   - If a Commit is referenced, the content for this Commit is returned.
   *
   * @generated from field: buf.registry.module.v1beta1.ResourceRef resource_ref = 1;
   */
  resourceRef?: ResourceRef;

  /**
   * Specific file types to request.
   *
   * If not set, all file types are returned.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.FileType file_types = 2;
   */
  fileTypes: FileType[];

  /**
   * Specific file paths to retrieve.
   *
   * May be directories. For example, path "foo/bar" will result in files "foo/bar/baz.proto",
   * "foo/bar/LICENSE" being downloaded.
   *
   * If empty, all file paths for the given reference are retrieved.
   *
   * If no paths match, an empty Files list will be returned, however the call may still
   * be successful if paths_allow_not_exist is set (the dependency list may still be on
   * the response). If a directory "foo/bar" is specified but this directory has no files,
   * this is considered to be a non-match.
   *
   * This field also interacts with file_types - if file_types is set, a path only matches
   * if it is also of the file type, and if there are no matching paths for the given FileTypes,
   * an error is returned unless paths_not_allow_exist is set.
   *
   * The path must be relative, and cannot contain any "." or ".." components
   * The separator "/" must be used.
   *
   * @generated from field: repeated string paths = 3;
   */
  paths: string[];

  /**
   * Whether to allow file paths not to exist within the given module.
   *
   * For example, one may want to retrieve the file paths "buf.md" and "README.md",
   * but only expect one to actually exist.
   *
   * If false, it is an error to specify non-existent file paths.
   *
   * @generated from field: bool paths_allow_not_exist = 4;
   */
  pathsAllowNotExist: boolean;
};

/**
 * Describes the message buf.registry.module.v1beta1.DownloadRequest.Value.
 * Use `create(DownloadRequest_ValueSchema)` to create a new message.
 */
export const DownloadRequest_ValueSchema: GenMessage<DownloadRequest_Value> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_download_service, 0, 0);

/**
 * @generated from message buf.registry.module.v1beta1.DownloadResponse
 */
export type DownloadResponse = Message<"buf.registry.module.v1beta1.DownloadResponse"> & {
  /**
   * The Contents of the references in the same order as requested.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.DownloadResponse.Content contents = 1;
   */
  contents: DownloadResponse_Content[];
};

/**
 * Describes the message buf.registry.module.v1beta1.DownloadResponse.
 * Use `create(DownloadResponseSchema)` to create a new message.
 */
export const DownloadResponseSchema: GenMessage<DownloadResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_download_service, 1);

/**
 * Content for a single Commit.
 *
 * @generated from message buf.registry.module.v1beta1.DownloadResponse.Content
 */
export type DownloadResponse_Content = Message<"buf.registry.module.v1beta1.DownloadResponse.Content"> & {
  /**
   * The Commit associated with the Content.
   *
   * The Commit associated with this ID will be present in the commits field.
   *
   * The Commit will use the DigestType specified in the request value.
   *
   * @generated from field: buf.registry.module.v1beta1.Commit commit = 1;
   */
  commit?: Commit;

  /**
   * The Files of the content.
   *
   * This will consist of the .proto files, license files, and documentation files.
   *
   * If no paths match and paths_allow_not_exist is set, this may be empty.
   *
   * @generated from field: repeated buf.registry.module.v1beta1.File files = 2;
   */
  files: File[];

  /**
   * The original v1beta1 or v1 buf.yaml file that encapsulated this reference.
   *
   * If the reference was encapsulated by a v2 buf.yaml, this will be a synthesized v1 buf.yaml.
   *
   * This is used in deprecated digest calculations only. None of the structured
   * information within this File conveys further information about the reference.
   *
   * @generated from field: buf.registry.module.v1beta1.File v1_buf_yaml_file = 3;
   */
  v1BufYamlFile?: File;

  /**
   * The original buf.lock file that encapsulated this reference, if it existed.
   *
   * If the reference was encapsulated by a v2 buf.lock with dependencies, this will be a
   * synthesized v1 buf.lock.
   *
   * This is used in deprecated digest calculations only. None of the structured
   * information within this File conveys further information about the reference.
   *
   * Importantly, this file should *not* used to determine the dependencies of the
   * reference. To determine the dependencies, use the GraphService with the returned
   * Commit.
   *
   * @generated from field: buf.registry.module.v1beta1.File v1_buf_lock_file = 4;
   */
  v1BufLockFile?: File;
};

/**
 * Describes the message buf.registry.module.v1beta1.DownloadResponse.Content.
 * Use `create(DownloadResponse_ContentSchema)` to create a new message.
 */
export const DownloadResponse_ContentSchema: GenMessage<DownloadResponse_Content> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1beta1_download_service, 1, 0);

/**
 * Download contents.
 *
 * @generated from service buf.registry.module.v1beta1.DownloadService
 */
export const DownloadService: GenService<{
  /**
   * Download the contents of multiple Modules, Labels, or Commits.
   *
   * Content consists of the .proto files, license files, and documentation files.
   *
   * @generated from rpc buf.registry.module.v1beta1.DownloadService.Download
   */
  download: {
    methodKind: "unary";
    input: typeof DownloadRequestSchema;
    output: typeof DownloadResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_buf_registry_module_v1beta1_download_service, 0);

