// Copyright 2023-2024 The Connect Authors
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

// @generated by protoc-gen-es v1.9.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file connectrpc/conformance/v1/client_compat.proto (package connectrpc.conformance.v1, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Empty, Message, proto3, Struct } from "@bufbuild/protobuf";
import { Codec, Compression, HTTPVersion, Protocol, StreamType, TLSCreds } from "./config_pb.js";
import { ConformancePayload, Error, Header, RawHTTPRequest } from "./service_pb.js";

/**
 * Describes one call the client should make. The client reads
 * these from stdin and, for each one, invokes an RPC as directed
 * and writes the results (in the form of a ClientCompatResponse
 * message) to stdout.
 *
 * @generated from message connectrpc.conformance.v1.ClientCompatRequest
 */
export class ClientCompatRequest extends Message<ClientCompatRequest> {
  /**
   * The name of the test that this request is performing.
   * When writing test cases, this is a required field.
   *
   * @generated from field: string test_name = 1;
   */
  testName = "";

  /**
   * Test suite YAML definitions should NOT set values for these next
   * nine fields (fields 2 - 10). They are automatically populated by the test
   * runner. If a test is specific to one of these values, it should instead be
   * indicated in the test suite itself (where it defines the required
   * features and relevant values for these fields).
   *
   * The HTTP version to use for the test (i.e. HTTP/1.1, HTTP/2, HTTP/3).
   *
   * @generated from field: connectrpc.conformance.v1.HTTPVersion http_version = 2;
   */
  httpVersion = HTTPVersion.HTTP_VERSION_UNSPECIFIED;

  /**
   * The protocol to use for the test (i.e. Connect, gRPC, gRPC-web).
   *
   * @generated from field: connectrpc.conformance.v1.Protocol protocol = 3;
   */
  protocol = Protocol.UNSPECIFIED;

  /**
   * The codec to use for the test (i.e. JSON, proto/binary).
   *
   * @generated from field: connectrpc.conformance.v1.Codec codec = 4;
   */
  codec = Codec.UNSPECIFIED;

  /**
   * The compression to use for the test (i.e. brotli, gzip, identity).
   *
   * @generated from field: connectrpc.conformance.v1.Compression compression = 5;
   */
  compression = Compression.UNSPECIFIED;

  /**
   * The server host that this request will be sent to.
   *
   * @generated from field: string host = 6;
   */
  host = "";

  /**
   * The server port that this request will be sent to.
   *
   * @generated from field: uint32 port = 7;
   */
  port = 0;

  /**
   * If non-empty, the server is using TLS. The bytes are the
   * server's PEM-encoded certificate, which the client should
   * verify and trust.
   *
   * @generated from field: bytes server_tls_cert = 8;
   */
  serverTlsCert = new Uint8Array(0);

  /**
   * If present, the client certificate credentials to use to
   * authenticate with the server. This will only be present
   * when server_tls_cert is non-empty.
   *
   * @generated from field: connectrpc.conformance.v1.TLSCreds client_tls_creds = 9;
   */
  clientTlsCreds?: TLSCreds;

  /**
   * If non-zero, indicates the maximum size in bytes for a message.
   * If the server sends anything larger, the client should reject it.
   *
   * @generated from field: uint32 message_receive_limit = 10;
   */
  messageReceiveLimit = 0;

  /**
   * The fully-qualified name of the service this test will interact with.
   * If specified, method must also be specified.
   * If not specified, defaults to "connectrpc.conformance.v1.ConformanceService".
   *
   * @generated from field: optional string service = 11;
   */
  service?: string;

  /**
   * The method on `service` that will be called.
   * If specified, service must also be specified.
   * If not specified, the test runner will auto-populate this field based on the stream_type.
   *
   * @generated from field: optional string method = 12;
   */
  method?: string;

  /**
   * The stream type of `method` (i.e. Unary, Client-Streaming, Server-Streaming, Full Duplex Bidi, or Half Duplex Bidi).
   * When writing test cases, this is a required field.
   *
   * @generated from field: connectrpc.conformance.v1.StreamType stream_type = 13;
   */
  streamType = StreamType.UNSPECIFIED;

  /**
   * If protocol indicates Connect and stream type indicates
   * Unary, this instructs the client to use a GET HTTP method
   * when making the request.
   *
   * @generated from field: bool use_get_http_method = 14;
   */
  useGetHttpMethod = false;

  /**
   * Any request headers that should be sent as part of the request.
   * These include only custom header metadata. Headers that are
   * part of the relevant protocol (such as "content-type", etc) should
   * not be stated here.
   *
   * @generated from field: repeated connectrpc.conformance.v1.Header request_headers = 15;
   */
  requestHeaders: Header[] = [];

  /**
   * The actual request messages that will sent to the server.
   * The type URL for all entries should be equal to the request type of the
   * method.
   * There must be exactly one for unary and server-stream methods but
   * can be zero or more for client- and bidi-stream methods.
   * For client- and bidi-stream methods, all entries will have the
   * same type URL.
   *
   * @generated from field: repeated google.protobuf.Any request_messages = 16;
   */
  requestMessages: Any[] = [];

  /**
   * The timeout, in milliseconds, for the request. This is equivalent to a
   * deadline for the request. If unset, there will be no timeout.
   *
   * @generated from field: optional uint32 timeout_ms = 17;
   */
  timeoutMs?: number;

  /**
   * Wait this many milliseconds before sending a request message.
   * For client- or bidi-streaming requests, this delay should be
   * applied before each request sent.
   *
   * @generated from field: uint32 request_delay_ms = 18;
   */
  requestDelayMs = 0;

  /**
   * If present, the client should cancel the RPC instead of
   * allowing to complete normally.
   *
   * @generated from field: connectrpc.conformance.v1.ClientCompatRequest.Cancel cancel = 19;
   */
  cancel?: ClientCompatRequest_Cancel;

  /**
   * The following field is only used by the reference client. If
   * you are implementing a client under test, you may ignore it
   * or respond with an error if the client receives a request where
   * it is set.
   *
   * When this field is present, it defines the actual HTTP request
   * that will be sent. The above group of fields must still be
   * provided and valid so that the reference client knows how it
   * should try to interpret the server's response.
   *
   * @generated from field: connectrpc.conformance.v1.RawHTTPRequest raw_request = 20;
   */
  rawRequest?: RawHTTPRequest;

  constructor(data?: PartialMessage<ClientCompatRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1.ClientCompatRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "test_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "http_version", kind: "enum", T: proto3.getEnumType(HTTPVersion) },
    { no: 3, name: "protocol", kind: "enum", T: proto3.getEnumType(Protocol) },
    { no: 4, name: "codec", kind: "enum", T: proto3.getEnumType(Codec) },
    { no: 5, name: "compression", kind: "enum", T: proto3.getEnumType(Compression) },
    { no: 6, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "port", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 8, name: "server_tls_cert", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 9, name: "client_tls_creds", kind: "message", T: TLSCreds },
    { no: 10, name: "message_receive_limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 11, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 12, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 13, name: "stream_type", kind: "enum", T: proto3.getEnumType(StreamType) },
    { no: 14, name: "use_get_http_method", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "request_headers", kind: "message", T: Header, repeated: true },
    { no: 16, name: "request_messages", kind: "message", T: Any, repeated: true },
    { no: 17, name: "timeout_ms", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 18, name: "request_delay_ms", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 19, name: "cancel", kind: "message", T: ClientCompatRequest_Cancel },
    { no: 20, name: "raw_request", kind: "message", T: RawHTTPRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientCompatRequest {
    return new ClientCompatRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientCompatRequest {
    return new ClientCompatRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientCompatRequest {
    return new ClientCompatRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ClientCompatRequest | PlainMessage<ClientCompatRequest> | undefined, b: ClientCompatRequest | PlainMessage<ClientCompatRequest> | undefined): boolean {
    return proto3.util.equals(ClientCompatRequest, a, b);
  }
}

/**
 * @generated from message connectrpc.conformance.v1.ClientCompatRequest.Cancel
 */
export class ClientCompatRequest_Cancel extends Message<ClientCompatRequest_Cancel> {
  /**
   * These fields determine the timing of cancellation.
   * If none are present, the client should cancel immediately
   * after all request messages are sent and the send side is
   * closed (as if the after_close_send_ms field were present
   * and zero).
   *
   * @generated from oneof connectrpc.conformance.v1.ClientCompatRequest.Cancel.cancel_timing
   */
  cancelTiming: {
    /**
     * When present, the client should cancel *instead of*
     * closing the send side of the stream, after all requests
     * have been sent. This applies only to client and bidi
     * stream RPCs.
     *
     * @generated from field: google.protobuf.Empty before_close_send = 1;
     */
    value: Empty;
    case: "beforeCloseSend";
  } | {
    /**
     * When present, the client should delay for this many
     * milliseconds after closing the send side of the stream
     * and then cancel.
     *
     * @generated from field: uint32 after_close_send_ms = 2;
     */
    value: number;
    case: "afterCloseSendMs";
  } | {
    /**
     * When present, the client should cancel right after
     * reading this number of response messages from the stream.
     * This applies only to server and bidi stream RPCs.
     *
     * @generated from field: uint32 after_num_responses = 3;
     */
    value: number;
    case: "afterNumResponses";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ClientCompatRequest_Cancel>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1.ClientCompatRequest.Cancel";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "before_close_send", kind: "message", T: Empty, oneof: "cancel_timing" },
    { no: 2, name: "after_close_send_ms", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "cancel_timing" },
    { no: 3, name: "after_num_responses", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "cancel_timing" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientCompatRequest_Cancel {
    return new ClientCompatRequest_Cancel().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientCompatRequest_Cancel {
    return new ClientCompatRequest_Cancel().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientCompatRequest_Cancel {
    return new ClientCompatRequest_Cancel().fromJsonString(jsonString, options);
  }

  static equals(a: ClientCompatRequest_Cancel | PlainMessage<ClientCompatRequest_Cancel> | undefined, b: ClientCompatRequest_Cancel | PlainMessage<ClientCompatRequest_Cancel> | undefined): boolean {
    return proto3.util.equals(ClientCompatRequest_Cancel, a, b);
  }
}

/**
 * The outcome of one ClientCompatRequest.
 *
 * @generated from message connectrpc.conformance.v1.ClientCompatResponse
 */
export class ClientCompatResponse extends Message<ClientCompatResponse> {
  /**
   * The test name that this response applies to.
   *
   * @generated from field: string test_name = 1;
   */
  testName = "";

  /**
   * These fields determine the outcome of the request.
   *
   * With regards to errors, any unexpected errors that prevent the client from
   * issuing the RPC and following the instructions implied by the request can
   * be reported as an error. These would be errors creating an RPC client from
   * the request parameters or unsupported/illegal values in the request
   * (e.g. a unary request that defines zero or multiple request messages).
   *
   * However, once the RPC is issued, any resulting error should instead be encoded in response.
   *
   * @generated from oneof connectrpc.conformance.v1.ClientCompatResponse.result
   */
  result: {
    /**
     * @generated from field: connectrpc.conformance.v1.ClientResponseResult response = 2;
     */
    value: ClientResponseResult;
    case: "response";
  } | {
    /**
     * @generated from field: connectrpc.conformance.v1.ClientErrorResult error = 3;
     */
    value: ClientErrorResult;
    case: "error";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ClientCompatResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1.ClientCompatResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "test_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "response", kind: "message", T: ClientResponseResult, oneof: "result" },
    { no: 3, name: "error", kind: "message", T: ClientErrorResult, oneof: "result" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientCompatResponse {
    return new ClientCompatResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientCompatResponse {
    return new ClientCompatResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientCompatResponse {
    return new ClientCompatResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ClientCompatResponse | PlainMessage<ClientCompatResponse> | undefined, b: ClientCompatResponse | PlainMessage<ClientCompatResponse> | undefined): boolean {
    return proto3.util.equals(ClientCompatResponse, a, b);
  }
}

/**
 * The result of a ClientCompatRequest, which may or may not be successful.
 * The client will build this message and return it back to the test runner.
 *
 * @generated from message connectrpc.conformance.v1.ClientResponseResult
 */
export class ClientResponseResult extends Message<ClientResponseResult> {
  /**
   * All response headers read from the response.
   *
   * @generated from field: repeated connectrpc.conformance.v1.Header response_headers = 1;
   */
  responseHeaders: Header[] = [];

  /**
   * Servers should echo back payloads that they received as part of the request.
   * This field should contain all the payloads the server echoed back. Note that
   * There will be zero-to-one for unary and client-stream methods and
   * zero-to-many for server- and bidi-stream methods.
   *
   * @generated from field: repeated connectrpc.conformance.v1.ConformancePayload payloads = 2;
   */
  payloads: ConformancePayload[] = [];

  /**
   * The error received from the actual RPC invocation. Note this is not representative
   * of a runtime error and should always be the proto equivalent of a Connect
   * or gRPC error.
   *
   * @generated from field: connectrpc.conformance.v1.Error error = 3;
   */
  error?: Error;

  /**
   * All response headers read from the response.
   *
   * @generated from field: repeated connectrpc.conformance.v1.Header response_trailers = 4;
   */
  responseTrailers: Header[] = [];

  /**
   * The number of messages that were present in the request but that could not be
   * sent because an error occurred before finishing the upload.
   *
   * @generated from field: int32 num_unsent_requests = 5;
   */
  numUnsentRequests = 0;

  /**
   * The following field is only set by the reference client. It communicates
   * the underlying HTTP status code of the server's response.
   * If you are implementing a client-under-test, you should ignore this field
   * and leave it unset.
   *
   * @generated from field: optional int32 http_status_code = 6;
   */
  httpStatusCode?: number;

  /**
   * This field is used only by the reference client, and it can be used
   * to provide additional feedback about problems observed in the server
   * response or in client processing of the response. If non-empty, the test
   * case is considered failed even if the result above matches all expectations.
   * If you are implementing a client-under-test, you should ignore this field
   * and leave it unset.
   *
   * @generated from field: repeated string feedback = 7;
   */
  feedback: string[] = [];

  constructor(data?: PartialMessage<ClientResponseResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1.ClientResponseResult";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "response_headers", kind: "message", T: Header, repeated: true },
    { no: 2, name: "payloads", kind: "message", T: ConformancePayload, repeated: true },
    { no: 3, name: "error", kind: "message", T: Error },
    { no: 4, name: "response_trailers", kind: "message", T: Header, repeated: true },
    { no: 5, name: "num_unsent_requests", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "http_status_code", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 7, name: "feedback", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientResponseResult {
    return new ClientResponseResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientResponseResult {
    return new ClientResponseResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientResponseResult {
    return new ClientResponseResult().fromJsonString(jsonString, options);
  }

  static equals(a: ClientResponseResult | PlainMessage<ClientResponseResult> | undefined, b: ClientResponseResult | PlainMessage<ClientResponseResult> | undefined): boolean {
    return proto3.util.equals(ClientResponseResult, a, b);
  }
}

/**
 * The client is not able to fulfill the ClientCompatRequest. This may be due
 * to a runtime error or an unexpected internal error such as the requested protocol
 * not being supported. This is completely independent of the actual RPC invocation.
 *
 * @generated from message connectrpc.conformance.v1.ClientErrorResult
 */
export class ClientErrorResult extends Message<ClientErrorResult> {
  /**
   * A message describing the error that occurred. This string will be shown to
   * users running conformance tests so it should include any relevant details
   * that may help troubleshoot or remedy the error.
   *
   * @generated from field: string message = 1;
   */
  message = "";

  constructor(data?: PartialMessage<ClientErrorResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1.ClientErrorResult";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientErrorResult {
    return new ClientErrorResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientErrorResult {
    return new ClientErrorResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientErrorResult {
    return new ClientErrorResult().fromJsonString(jsonString, options);
  }

  static equals(a: ClientErrorResult | PlainMessage<ClientErrorResult> | undefined, b: ClientErrorResult | PlainMessage<ClientErrorResult> | undefined): boolean {
    return proto3.util.equals(ClientErrorResult, a, b);
  }
}

/**
 * Details about various values as observed on the wire. This message is used
 * only by the reference client when reporting results and should not be populated
 * by clients under test.
 *
 * @generated from message connectrpc.conformance.v1.WireDetails
 */
export class WireDetails extends Message<WireDetails> {
  /**
   * The HTTP status code of the response.
   *
   * @generated from field: int32 actual_status_code = 1;
   */
  actualStatusCode = 0;

  /**
   * When processing an error from a Connect server, this should contain
   * the actual JSON received on the wire.
   *
   * @generated from field: google.protobuf.Struct connect_error_raw = 2;
   */
  connectErrorRaw?: Struct;

  /**
   * Any HTTP trailers observed after the response body. These do NOT
   * include trailers that conveyed via the body, as done in the gRPC-Web
   * and Connect streaming protocols.
   *
   * @generated from field: repeated connectrpc.conformance.v1.Header actual_http_trailers = 3;
   */
  actualHttpTrailers: Header[] = [];

  /**
   * Any trailers that were transmitted in the final message of the
   * response body for a gRPC-Web response. This could differ from the
   * ClientResponseResult.response_trailers field since the RPC client
   * library might canonicalize keys and it might choose to remove
   * "grpc-status" et al from the set of metadata. This field will
   * capture all of the entries and their exact on-the-wire spelling
   * and formatting.
   *
   * @generated from field: optional string actual_grpcweb_trailers = 4;
   */
  actualGrpcwebTrailers?: string;

  constructor(data?: PartialMessage<WireDetails>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.conformance.v1.WireDetails";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "actual_status_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "connect_error_raw", kind: "message", T: Struct },
    { no: 3, name: "actual_http_trailers", kind: "message", T: Header, repeated: true },
    { no: 4, name: "actual_grpcweb_trailers", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WireDetails {
    return new WireDetails().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WireDetails {
    return new WireDetails().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WireDetails {
    return new WireDetails().fromJsonString(jsonString, options);
  }

  static equals(a: WireDetails | PlainMessage<WireDetails> | undefined, b: WireDetails | PlainMessage<WireDetails> | undefined): boolean {
    return proto3.util.equals(WireDetails, a, b);
  }
}

