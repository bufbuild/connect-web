// Copyright 2021-2025 The Connect Authors
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

// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,import_extension=.js"
// @generated from file connectrpc/conformance/v1/suite.proto (package connectrpc.conformance.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { ClientCompatRequest, ClientResponseResult } from "./client_compat_pb.js";
import { file_connectrpc_conformance_v1_client_compat } from "./client_compat_pb.js";
import type { Code, Codec, Compression, HTTPVersion, Protocol } from "./config_pb.js";
import { file_connectrpc_conformance_v1_config } from "./config_pb.js";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file connectrpc/conformance/v1/suite.proto.
 */
export const file_connectrpc_conformance_v1_suite: GenFile = /*@__PURE__*/
  fileDesc("CiVjb25uZWN0cnBjL2NvbmZvcm1hbmNlL3YxL3N1aXRlLnByb3RvEhljb25uZWN0cnBjLmNvbmZvcm1hbmNlLnYxIsYGCglUZXN0U3VpdGUSDAoEbmFtZRgBIAEoCRI7CgRtb2RlGAIgASgOMi0uY29ubmVjdHJwYy5jb25mb3JtYW5jZS52MS5UZXN0U3VpdGUuVGVzdE1vZGUSNwoKdGVzdF9jYXNlcxgDIAMoCzIjLmNvbm5lY3RycGMuY29uZm9ybWFuY2UudjEuVGVzdENhc2USPwoScmVsZXZhbnRfcHJvdG9jb2xzGAQgAygOMiMuY29ubmVjdHJwYy5jb25mb3JtYW5jZS52MS5Qcm90b2NvbBJGChZyZWxldmFudF9odHRwX3ZlcnNpb25zGAUgAygOMiYuY29ubmVjdHJwYy5jb25mb3JtYW5jZS52MS5IVFRQVmVyc2lvbhI5Cg9yZWxldmFudF9jb2RlY3MYBiADKA4yIC5jb25uZWN0cnBjLmNvbmZvcm1hbmNlLnYxLkNvZGVjEkUKFXJlbGV2YW50X2NvbXByZXNzaW9ucxgHIAMoDjImLmNvbm5lY3RycGMuY29uZm9ybWFuY2UudjEuQ29tcHJlc3Npb24SVQoUY29ubmVjdF92ZXJzaW9uX21vZGUYCCABKA4yNy5jb25uZWN0cnBjLmNvbmZvcm1hbmNlLnYxLlRlc3RTdWl0ZS5Db25uZWN0VmVyc2lvbk1vZGUSFQoNcmVsaWVzX29uX3RscxgJIAEoCBIiChpyZWxpZXNfb25fdGxzX2NsaWVudF9jZXJ0cxgKIAEoCBIdChVyZWxpZXNfb25fY29ubmVjdF9nZXQYCyABKAgSJwofcmVsaWVzX29uX21lc3NhZ2VfcmVjZWl2ZV9saW1pdBgMIAEoCCJRCghUZXN0TW9kZRIZChVURVNUX01PREVfVU5TUEVDSUZJRUQQABIUChBURVNUX01PREVfQ0xJRU5UEAESFAoQVEVTVF9NT0RFX1NFUlZFUhACIn0KEkNvbm5lY3RWZXJzaW9uTW9kZRIkCiBDT05ORUNUX1ZFUlNJT05fTU9ERV9VTlNQRUNJRklFRBAAEiAKHENPTk5FQ1RfVkVSU0lPTl9NT0RFX1JFUVVJUkUQARIfChtDT05ORUNUX1ZFUlNJT05fTU9ERV9JR05PUkUQAiL2AgoIVGVzdENhc2USPwoHcmVxdWVzdBgBIAEoCzIuLmNvbm5lY3RycGMuY29uZm9ybWFuY2UudjEuQ2xpZW50Q29tcGF0UmVxdWVzdBJJCg9leHBhbmRfcmVxdWVzdHMYAiADKAsyMC5jb25uZWN0cnBjLmNvbmZvcm1hbmNlLnYxLlRlc3RDYXNlLkV4cGFuZGVkU2l6ZRJKChFleHBlY3RlZF9yZXNwb25zZRgDIAEoCzIvLmNvbm5lY3RycGMuY29uZm9ybWFuY2UudjEuQ2xpZW50UmVzcG9uc2VSZXN1bHQSQgoZb3RoZXJfYWxsb3dlZF9lcnJvcl9jb2RlcxgEIAMoDjIfLmNvbm5lY3RycGMuY29uZm9ybWFuY2UudjEuQ29kZRpOCgxFeHBhbmRlZFNpemUSIwoWc2l6ZV9yZWxhdGl2ZV90b19saW1pdBgBIAEoBUgAiAEBQhkKF19zaXplX3JlbGF0aXZlX3RvX2xpbWl0YgZwcm90bzM", [file_connectrpc_conformance_v1_client_compat, file_connectrpc_conformance_v1_config]);

/**
 * TestSuite represents a set of conformance test cases. This is also the schema
 * used for the structure of a YAML test file. Each YAML file represents a test
 * suite, which can contain numerous cases. Each test suite has various properties
 * that indicate the kinds of features that are tested. Test suites may be skipped
 * based on whether the client or server under test implements these features.
 *
 * @generated from message connectrpc.conformance.v1.TestSuite
 */
export type TestSuite = Message<"connectrpc.conformance.v1.TestSuite"> & {
  /**
   * Test suite name. When writing test suites, this is a required field.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The mode (client or server) that this test suite applies to. This is used
   * in conjunction with the `--mode` flag passed to the conformance runner
   * binary. If the mode on the suite is set to client, the tests will only be
   * run if `--mode client` is set on the command to the test runner.
   * Likewise if mode is server. If this is unset, the test case will be run in both modes.
   *
   * @generated from field: connectrpc.conformance.v1.TestSuite.TestMode mode = 2;
   */
  mode: TestSuite_TestMode;

  /**
   * The actual test cases in the suite.
   *
   * @generated from field: repeated connectrpc.conformance.v1.TestCase test_cases = 3;
   */
  testCases: TestCase[];

  /**
   * If non-empty, the protocols to which this suite applies. If empty,
   * this suite applies to all protocols.
   *
   * @generated from field: repeated connectrpc.conformance.v1.Protocol relevant_protocols = 4;
   */
  relevantProtocols: Protocol[];

  /**
   * If non-empty, the HTTP versions to which this suite applies. If empty,
   * this suite applies to all HTTP versions.
   *
   * @generated from field: repeated connectrpc.conformance.v1.HTTPVersion relevant_http_versions = 5;
   */
  relevantHttpVersions: HTTPVersion[];

  /**
   * If non-empty, the codecs to which this suite applies. If empty, this
   * suite applies to all codecs.
   *
   * @generated from field: repeated connectrpc.conformance.v1.Codec relevant_codecs = 6;
   */
  relevantCodecs: Codec[];

  /**
   * If non-empty, the compression encodings to which this suite applies.
   * If empty, this suite applies to all encodings.
   *
   * @generated from field: repeated connectrpc.conformance.v1.Compression relevant_compressions = 7;
   */
  relevantCompressions: Compression[];

  /**
   * Indicates the Connect version validation behavior that this suite
   * relies on.
   *
   * @generated from field: connectrpc.conformance.v1.TestSuite.ConnectVersionMode connect_version_mode = 8;
   */
  connectVersionMode: TestSuite_ConnectVersionMode;

  /**
   * If true, the cases in this suite rely on TLS and will only be run against
   * TLS server configurations.
   *
   * @generated from field: bool relies_on_tls = 9;
   */
  reliesOnTls: boolean;

  /**
   * If true, the cases in this suite rely on the client using TLS
   * certificates to authenticate with the server. (Should only be
   * true if relies_on_tls is also true.)
   *
   * @generated from field: bool relies_on_tls_client_certs = 10;
   */
  reliesOnTlsClientCerts: boolean;

  /**
   * If true, the cases in this suite rely on the Connect GET protocol.
   *
   * @generated from field: bool relies_on_connect_get = 11;
   */
  reliesOnConnectGet: boolean;

  /**
   * If true, the cases in this suite rely on support for limiting the
   * size of received messages. When true, mode should be set to indicate
   * whether it is the client or the server that must support the limit.
   *
   * @generated from field: bool relies_on_message_receive_limit = 12;
   */
  reliesOnMessageReceiveLimit: boolean;
};

/**
 * Describes the message connectrpc.conformance.v1.TestSuite.
 * Use `create(TestSuiteSchema)` to create a new message.
 */
export const TestSuiteSchema: GenMessage<TestSuite> = /*@__PURE__*/
  messageDesc(file_connectrpc_conformance_v1_suite, 0);

/**
 * @generated from enum connectrpc.conformance.v1.TestSuite.TestMode
 */
export enum TestSuite_TestMode {
  /**
   * Used when the test suite does not apply to a particular mode. Such tests
   * are run, regardless of the current test mode, to verify both clients and
   * servers under test.
   *
   * @generated from enum value: TEST_MODE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Indicates tests that are intended to be used only for a client-under-test.
   * These cases can induce very particular and/or aberrant responses from the
   * reference server, to verify how the client reacts to such responses.
   *
   * @generated from enum value: TEST_MODE_CLIENT = 1;
   */
  CLIENT = 1,

  /**
   * Indicates tests that are intended to be used only for a server-under-test.
   * These cases can induce very particular and/or aberrant requests from the
   * reference client, to verify how the server reacts to such requests.
   *
   * @generated from enum value: TEST_MODE_SERVER = 2;
   */
  SERVER = 2,
}

/**
 * Describes the enum connectrpc.conformance.v1.TestSuite.TestMode.
 */
export const TestSuite_TestModeSchema: GenEnum<TestSuite_TestMode> = /*@__PURE__*/
  enumDesc(file_connectrpc_conformance_v1_suite, 0, 0);

/**
 * @generated from enum connectrpc.conformance.v1.TestSuite.ConnectVersionMode
 */
export enum TestSuite_ConnectVersionMode {
  /**
   * Used when the suite is agnostic to the server's validation
   * behavior.
   *
   * @generated from enum value: CONNECT_VERSION_MODE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Used when the suite relies on the server validating the presence
   * and correctness of the Connect version header or query param.
   *
   * @generated from enum value: CONNECT_VERSION_MODE_REQUIRE = 1;
   */
  REQUIRE = 1,

  /**
   * Used when the suite relies on the server ignore any Connect
   * header or query param.
   *
   * @generated from enum value: CONNECT_VERSION_MODE_IGNORE = 2;
   */
  IGNORE = 2,
}

/**
 * Describes the enum connectrpc.conformance.v1.TestSuite.ConnectVersionMode.
 */
export const TestSuite_ConnectVersionModeSchema: GenEnum<TestSuite_ConnectVersionMode> = /*@__PURE__*/
  enumDesc(file_connectrpc_conformance_v1_suite, 0, 1);

/**
 * @generated from message connectrpc.conformance.v1.TestCase
 */
export type TestCase = Message<"connectrpc.conformance.v1.TestCase"> & {
  /**
   * Defines the RPC that the client should invoke. The first eight fields
   * are not fully specified. Instead the first field, test_name, must be
   * present but is a prefix -- other characteristics that identify one
   * permutation of the test case will be appended to this name. The next
   * seven fields (http_version, protocol, codec, compression, host, port,
   * and server_tls_cert) must not be present. They are all populated by
   * the test harness based on the test environment (e.g. actual server and
   *  port to use) and characteristics of a single permutation.
   *
   * @generated from field: connectrpc.conformance.v1.ClientCompatRequest request = 1;
   */
  request?: ClientCompatRequest;

  /**
   * To support extremely large messages, as well as very precisely-sized
   * messages, without having to encode them fully or perfectly in YAML
   * test cases, this value can be specified. When non-empty, this value
   * should have no more entries than there are messages in the request
   * stream. The first value is applied to the first request message, and
   * so on. For each entry, if the size is present, it is used to expand
   * the data field in the request (which is actually part of the response
   * definition). The specified size is added to the current limit on
   * message size that the server will accept. That sum is the size of the
   * the serialized message that will be sent, and the data field will be
   * padded as needed to reach that size.
   *
   * @generated from field: repeated connectrpc.conformance.v1.TestCase.ExpandedSize expand_requests = 2;
   */
  expandRequests: TestCase_ExpandedSize[];

  /**
   * Defines the expected response to the above RPC. The expected response for
   * a test is auto-generated based on the request details. The conformance runner
   * will determine what the response should be according to the values specified
   * in the test suite and individual test cases.
   *
   * This value can also be specified explicitly in the test case YAML. However,
   * this is typically only needed for exception test cases. If the expected
   * response is mostly re-stating the response definition that appears in the
   * requests, test cases should rely on the auto-generation if possible.
   * Otherwise, specifying an expected response can make the test YAML overly
   * verbose and harder to read, write, and maintain.
   *
   * If the test induces behavior that prevents the server from sending or client
   * from receiving the full response definition, it will be necessary to define
   * the expected response explicitly. Timeouts, cancellations, and exceeding
   * message size limits are good examples of this.
   *
   * Specifying an expected response explicitly in test definitions will override
   * the auto-generation of the test runner.
   *
   * @generated from field: connectrpc.conformance.v1.ClientResponseResult expected_response = 3;
   */
  expectedResponse?: ClientResponseResult;

  /**
   * When expected_response indicates that an error is expected, in some cases, the
   * actual error code returned may be flexible. In that case, this field provides
   * other acceptable error codes, in addition to the one indicated in the
   * expected_response. As long as the actual error's code matches any of these, the
   * error is considered conformant, and the test case can pass.
   *
   * @generated from field: repeated connectrpc.conformance.v1.Code other_allowed_error_codes = 4;
   */
  otherAllowedErrorCodes: Code[];
};

/**
 * Describes the message connectrpc.conformance.v1.TestCase.
 * Use `create(TestCaseSchema)` to create a new message.
 */
export const TestCaseSchema: GenMessage<TestCase> = /*@__PURE__*/
  messageDesc(file_connectrpc_conformance_v1_suite, 1);

/**
 * @generated from message connectrpc.conformance.v1.TestCase.ExpandedSize
 */
export type TestCase_ExpandedSize = Message<"connectrpc.conformance.v1.TestCase.ExpandedSize"> & {
  /**
   * The size, in bytes, relative to the limit. For example, to expand to a
   * size that is exactly equal to the limit, this should be set to zero.
   * Any value greater than zero indicates that the request size will be that
   * many bytes over the limit.
   *
   * @generated from field: optional int32 size_relative_to_limit = 1;
   */
  sizeRelativeToLimit?: number;
};

/**
 * Describes the message connectrpc.conformance.v1.TestCase.ExpandedSize.
 * Use `create(TestCase_ExpandedSizeSchema)` to create a new message.
 */
export const TestCase_ExpandedSizeSchema: GenMessage<TestCase_ExpandedSize> = /*@__PURE__*/
  messageDesc(file_connectrpc_conformance_v1_suite, 1, 0);

