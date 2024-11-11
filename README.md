> [!IMPORTANT]  
> You are looking at the release candidate for version 2. For the current stable version, see the branch [v1](https://github.com/connectrpc/connect-es/tree/v1).

<img src=".github/connect-logo.png" width="15%" />

# Connect for ECMAScript

[![License](https://img.shields.io/github/license/connectrpc/connect-es?color=blue)](./LICENSE) [![Build](https://github.com/connectrpc/connect-es/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/connectrpc/connect-es/actions/workflows/ci.yaml) [![NPM Version](https://img.shields.io/npm/v/@connectrpc/connect/latest?color=green&label=%40connectrpc%2Fconnect)](https://www.npmjs.com/package/@connectrpc/connect)

Connect is a family of libraries for building type-safe APIs with different languages and platforms.
[@connectrpc/connect](https://www.npmjs.com/package/@connectrpc/connect) brings them to TypeScript,
the web browser, and to Node.js.

With Connect, you define your schema first:

```
service ElizaService {
  rpc Say(SayRequest) returns (SayResponse) {}
}
```

And with the magic of code generation, this schema produces servers and clients:

```ts
const answer = await eliza.say({ sentence: "I feel happy." });
console.log(answer);
// {sentence: 'When you feel happy, what do you do?'}
```

Unlike REST, the Remote Procedure Call are type-safe, but they are regular HTTP
under the hood. You can see all requests in the network inspector, and you
can `curl` them if you want:

```shell
curl \
    --header 'Content-Type: application/json' \
    --data '{"sentence": "I feel happy."}' \
    https://demo.connectrpc.com/connectrpc.eliza.v1.ElizaService/Say
```

Connect uses [Protobuf-ES](https://github.com/bufbuild/protobuf-es), the only
[fully-compliant](https://buf.build/blog/protobuf-conformance) Protobuf JavaScript library.

Connect implements RPC three protocols: The widely available gRPC and
gRPC-web protocols, and Connect's [own protocol](https://connectrpc.com/docs/protocol/),
optimized for the web. This gives you unparalleled interoperability across many
platforms and languages, with type-safety end-to-end.

## Get started on the web

Follow our [10 minute tutorial](https://connectrpc.com/docs/web/getting-started) where
we use [Vite](https://vitejs.dev/) and [React](https://reactjs.org/) to create a
web interface for ELIZA.

**React**, **Svelte**, **Vue**, **Next.js** and **Angular** are supported (see [examples](https://github.com/connectrpc/examples-es)),
and we have an expansion pack for [TanStack Query](https://github.com/connectrpc/connect-query-es).
We support all modern web browsers that implement the widely available
[fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
and the [Encoding API](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API).

## Get started on Node.js

Follow our [10 minute tutorial](https://connectrpc.com/docs/node/getting-started)
to spin up a service in Node.js, and call it from the web, and from a gRPC client
in your terminal.

You can serve your Connect RPCs with vanilla Node.js, or use our [server plugins](https://connectrpc.com/docs/node/server-plugins)
for **Fastify**, **Next.js**, and **Express**. We support Node.js v18.14.1 and later with
the builtin `http` and `http2` modules.

## Migrating from version 1

Version 2 provides new features and simplifies some common APIs. In addition,
it makes use of all the enhancements of Protobuf-ES v2. To upgrade, you'll need
to update your dependencies, re-generate code, and update callsites in your application.

The first thing to be aware of is that the plugin `protoc-gen-connect-es` has been
removed in v2. Connect now relies on descriptors generated by Protobuf-ES v2.
When upgrading, you will first need to remove any usage of this plugin. For most
users, this means a combination of any of the following steps:

- Remove `protoc-gen-connect-es` from `package.json` either manually or
  via a package manager, i.e. `npm uninstall @connectrpc/protoc-gen-connect-es`.

- Remove any usage of the plugin in `buf.gen.yaml`.

- Remove any dependency on Generated SDKs for Connect from `package.json` using
  the same approach used for removing the plugin. Users should then rely on
  types from the `@bufbuild_es` plugin instead. This will also necessitate a code
  change, which is usually a simple import path update from `*_connect` to `*_pb`.

Next, as mentioned, Connect uses Protobuf-ES v2, so you will need to upgrade any
dependencies you have on its relevant packages:

```shellsession
npm install @bufbuild/protobuf@^2.0.0 @bufbuild/protoc-gen-es@^2.0.0
```

Finally, update the Connect [packages](#packages) you use with your package
manager of choice. For example, with NPM:

```shellsession
npm install @connectrpc/connect@^2.0.0 @connectrpc/connect-web@^2.0.0
```

### Update your code

Next, you'll need to account for any breaking changes. Following is a list to
be aware of:

- The gRPC Transport now requires HTTP/2. If you are using `createGrpcTransport`
  and specifying an `httpVersion`, it will fail compilation. Remove the
  `httpVersion` property to use the default of HTTP/2.

  Note that if you were relying on HTTP/1.1 as part of your gRPC strategy, this
  may require bigger architectural changes, but the hope is that this is not a
  common problem.

- Promise clients are now the default and the previously-deprecated
  `createPromiseClient` has been removed. Any callsites using `createPromiseClient`
  should be updated to use `createClient`.

- Node 16 is no longer supported. Connect v2 now supports Node versions 18.14.1 and up.

- Previously, Connect allowed request objects with matching shapes to be passed
  to API calls interchangeably as long as the passed object was a superset of the
  target type. For example, given the following proto definitions:

  ```protobuf
  syntax = "proto3";
  package example.v1;
  message MessageA {
    string field_a = 1;
  }
  message MessageB {
    string field_a = 1;
    int64 field_b = 2;
  }
  service ExampleService {
    rpc RequestA(MessageA) returns (Empty) {}
    rpc RequestB(MessageB) returns (Empty) {}
  }
  ```

  The following would have passed TypeScript compilation:

  ```ts
  client.requestA(new MessageA());
  client.requestA(new MessageB());
  ```

  This was an unintended bug and not a feature. In Connect v2, only the specified
  target type will pass compilation.

- We have removed the `credentials` option from transports as well as the `init`
  option in interceptors. These two options were used to customize `fetch` routines.
  Users should now rely on the `fetch` option in transports as a way to perform
  these customizations. For example:

  ```ts
  createConnectTransport({
    baseUrl: "/",
    fetch: (input, init) => fetch(input, { ...init, credentials: "include" }),
  });
  ```

  In addition, as a replacement to determine whether an incoming request is a
  Connect GET request in server-side interceptors, the property `requestMethod: string`
  has been added to intercepted requests. This property is symmetrical to `HandlerContext.requestMethod`.

- The access pattern of `MethodDescriptor` has slightly changed. In v2, the
  Protobuf-ES plugin generates service descriptors and changes the
  access pattern for method descriptors. Instead of the plural form `methods`,
  it now uses the singular `method`.

  For example: `ElizaService.methods.Say` now becomes `ElizaService.method.Say`.

- Errors details are now a pair of desc and init values. In Connect v1, error
  details were specified as message instances. In v2, error
  details are now an object that specifies both a schema and initialization
  object which are both passed to the `create` function of Protobuf-ES. For example:

  ```diff
  - import { LocalizedMessage } from "./gen/google/rpc/error_details_pb";
  - const details = [
  -   new LocalizedMessage({
  -       locale: "fr-CH",
  -       message: "Je n'ai plus de mots.",
  -   }),
  - ];
  + import { LocalizedMessageSchema } from "./gen/google/rpc/error_details_pb";
  + const details = [
  +   {
  +     desc: LocalizedMessageSchema,
  +     value: {
  +       locale: "fr-CH",
  +       message: "Je n'ai plus de mots.",
  +     }
  +   },
  + ];

  const metadata = new Headers({
    "words-left": "none"
  });
  throw new ConnectError(
    "I have no words anymore.",
    Code.ResourceExhausted,
    metadata,
    details
  );
  ```

- `MethodDescriptor` is now self-sufficient. In v1, method descriptors always
  had to be used alongside the service descriptors. In v2, they can now be used
  standalone. This means that all callsites that previously passed a service
  and method descriptor can now just pass the method descriptor.

  A notable example is when using a Connect `Router` on the server-side:

  ```diff
  const routes = ({rpc}: Router) => {
  -   rpc(ElizaService, ElizaService.say, impl);
  +   rpc(ElizaService.say, impl);
  }
  ```

- Interceptors for streaming RPCs now use appropriate stream types. In
  v1, the server used more exact types in interceptors, for example `UnaryRequest`
  for server-streaming rpcs while the client always used streaming variants.
  This was unintended behavior and has been fixed in v2. Now all streaming RPCs
  use the `StreamRequest` and `StreamResponse` types on the server as well.

## Other platforms

Would you like to use Connect on other platforms like Bun, Deno, Vercel’s Edge Runtime,
or Cloudflare Workers? We’d love to learn about your use cases and what you’d like to do
with Connect. You can reach us either through the [Buf Slack](https://buf.build/links/slack/)
or by filing a [GitHub issue](https://github.com/connectrpc/connect-es/issues) and we’d
be more than happy to chat!

## Packages

- [@connectrpc/connect](https://www.npmjs.com/package/@connectrpc/connect):
  RPC clients and servers for your schema ([source code](packages/connect)).
- [@connectrpc/connect-web](https://www.npmjs.com/package/@connectrpc/connect-web):
  Adapters for web browsers, and any other platform that has the fetch API on board.
- [@connectrpc/connect-node](https://www.npmjs.com/package/@connectrpc/connect-node):
  Serve RPCs on vanilla Node.js servers. Call RPCs with any protocol.
- [@connectrpc/connect-fastify](https://www.npmjs.com/package/@connectrpc/connect-fastify):
  Plug your services into a [Fastify](https://www.fastify.io/) server.
- [@connectrpc/connect-next](https://www.npmjs.com/package/@connectrpc/connect-next):
  Serve your RPCs with [Next.js](https://nextjs.org/) API routes.
- [@connectrpc/connect-express](https://www.npmjs.com/package/@connectrpc/connect-express):
  Adds your services to an [Express](https://expressjs.com/) server.

The libraries and the generated code are compatible with ES2017 and TypeScript 4.9.5.

## Ecosystem

- [examples-es](https://github.com/connectrpc/examples-es):
  Examples for using Connect with various TypeScript web frameworks and tooling
- [connect-query-es](https://github.com/connectrpc/connect-query-es):
  TypeScript-first expansion pack for TanStack Query that gives you Protobuf superpowers
- [connect-playwright-es](https://github.com/connectrpc/connect-playwright-es):
  Playwright tests for your Connect application
- [connect-swift](https://github.com/connectrpc/connect-swift):
  Idiomatic gRPC & Connect RPCs for Swift
- [connect-go](https://github.com/connectrpc/connect-go):
  Go implementation of gRPC, gRPC-Web, and Connect
- [examples-go](https://github.com/connectrpc/examples-go):
  Example RPC service powering https://demo.connectrpc.com and built with connect-go
- [conformance](https://github.com/connectrpc/conformance):
  gRPC-Web and Connect interoperability tests
- [Buf Studio](https://buf.build/studio): web UI for ad-hoc RPCs

## Legal

Offered under the [Apache 2 license](/LICENSE).
