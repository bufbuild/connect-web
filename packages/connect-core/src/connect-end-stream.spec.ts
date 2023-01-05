// Copyright 2021-2023 Buf Technologies, Inc.
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

import type { JsonObject } from "@bufbuild/protobuf";
import {
  connectEndStreamFromJson,
  connectEndStreamToJson,
} from "./connect-end-stream.js";
import { ConnectError } from "./connect-error.js";
import { Code } from "./code.js";
import { connectErrorToJson } from "./connect-error-to-json.js";
import { Headers as UndiciHeaders } from "undici";

// TODO we need to replace all Headers ctor calls in our code or require Node.js >= v18
if (typeof globalThis.Headers !== "function") {
  globalThis.Headers = UndiciHeaders as unknown as typeof Headers;
}

describe("connectEndStreamFromJson()", function () {
  it("should parse expected", function () {
    const json: JsonObject = {
      error: {
        code: "resource_exhausted",
        message: "my bad",
      },
      metadata: { foo: ["baz", "bar"] },
    };
    const endStream = connectEndStreamFromJson(JSON.stringify(json));
    expect(endStream.metadata.get("foo")).toBe("baz, bar");
    expect(endStream.error?.code).toBe(Code.ResourceExhausted);
    expect(endStream.error?.rawMessage).toBe("my bad");
  });
});

describe("connectEndStreamToJson()", function () {
  it("should be {} in the most simple form", function () {
    const got = connectEndStreamToJson(new Headers(), undefined, undefined);
    const want: JsonObject = {};
    expect(got).toEqual(want);
  });
  it("should serialize the error", function () {
    const err = new ConnectError("my bad", Code.ResourceExhausted);
    const got = connectEndStreamToJson(new Headers(), err, undefined);
    const want: JsonObject = {
      error: connectErrorToJson(err, undefined),
    };
    expect(got).toEqual(want);
  });
  it("should serialize metadata", function () {
    const got = connectEndStreamToJson(
      new Headers({
        foo: "bar",
      }),
      undefined,
      undefined
    );
    const want: JsonObject = {
      metadata: { foo: ["bar"] },
    };
    expect(got).toEqual(want);
  });
  it("should serialize metadata from the error", function () {
    const err = new ConnectError("my bad", Code.ResourceExhausted, {
      foo: "bar",
    });
    const got = connectEndStreamToJson(new Headers(), err, undefined);
    const want: JsonObject = {
      error: connectErrorToJson(err, undefined),
      metadata: { foo: ["bar"] },
    };
    expect(got).toEqual(want);
  });
  it("should append metadata from the error", function () {
    const err = new ConnectError("my bad", Code.ResourceExhausted, {
      foo: "bar",
    });
    const got = connectEndStreamToJson(
      new Headers({
        foo: "baz",
      }),
      err,
      undefined
    );
    const want: JsonObject = {
      error: connectErrorToJson(err, undefined),
      metadata: { foo: ["baz, bar"] },
    };
    expect(got).toEqual(want);
  });
});
