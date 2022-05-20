package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/bufbuild/connect-web/packages/connect-web-test/server/internal/gen/connect/examples/examplesconnect"
	"github.com/bufbuild/connect-web/packages/connect-web-test/server/internal/gen/go/examples"
	"github.com/rs/cors"
)

type MyService struct {
	examplesconnect.UnimplementedMyServiceHandler // returns errors from all methods
}

func (ps *MyService) GetFoo(
	ctx context.Context,
	req *connect.Request[examples.FooRequest],
) (*connect.Response[examples.FooResponse], error) {
	res := connect.NewResponse(&examples.FooResponse{
		Foo: req.Msg.GetFoo(),
	})
	return res, nil
}

func (ps *MyService) GetBar(
	ctx context.Context,
	req *connect.Request[examples.BarRequest],
) (*connect.Response[examples.BarResponse], error) {
	res := connect.NewResponse(&examples.BarResponse{
		Bar: req.Msg.GetBar(),
	})
	return res, nil
}

func main() {
	mux := http.NewServeMux()
	// The generated constructors return a path and a plain net/http
	// handler.
	mux.Handle(examplesconnect.NewMyServiceHandler(&MyService{}))
	corsHandler := cors.New(cors.Options{
		AllowedMethods: []string{
			http.MethodHead,
			http.MethodGet,
			http.MethodPost,
			http.MethodPut,
			http.MethodPatch,
			http.MethodDelete,
		},
		// Mirror the `Origin` header value in the `Access-Control-Allow-Origin`
		// preflight response header.
		// This is equivalent to `Access-Control-Allow-Origin: *`, but allows
		// for requests with credentials.
		// Note that this effectively disables CORS and is not safe for use in
		// production environments.
		AllowOriginFunc: func(origin string) bool {
			return true
		},
		// Note that rs/cors does not return `Access-Control-Allow-Headers: *`
		// in response to preflight requests with the following configuration.
		// It simply mirrors all headers listed in the `Access-Control-Request-Headers`
		// preflight request header.
		AllowedHeaders: []string{"*"},
		// We explicitly set the exposed header names instead of using the wildcard *,
		// because in requests with credentials, it is treated as the literal header
		// name "*" without special semantics.
		ExposedHeaders: []string{"Grpc-Status", "Grpc-Message", "Grpc-Status-Details-Bin"},
	}).Handler(mux)
	h1Server := http.Server{
		Addr:    ":9000",
		Handler: corsHandler,
	}
	fmt.Println("serving at http://127.0.0.1:9000")
	if err := h1Server.ListenAndServe(); err != nil {
		log.Fatalln(err)
	}
}
