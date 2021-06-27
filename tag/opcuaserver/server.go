
package main

import (
	"context"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
	"io"
	"log"
	"net"
	"net/http"
	"opcua/grpc/example/tag/tagpb"
	"time"
)

type server struct {
	tagpb.UnimplementedStreamTagEveryoneServiceServer
}
func main() {

	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	srvr := grpc.NewServer()

	tagpb.RegisterStreamTagEveryoneServiceServer(
		srvr,
		&server{},
	)

	//if err := srvr.Serve(lis); err != nil {
	//	log.Fatalln("failed to serve", err)
	//}

	go func() {
		log.Fatalln(srvr.Serve(lis))
	}()

	// grpc web proxy opcuaserver
	grpcWebServer := grpcweb.WrapServer(srvr)
	multiplex := grpcMultiplexer{
		grpcWebServer,
	}

	r := http.NewServeMux()

	webapp := http.FileServer(http.Dir("webclient"))

	r.Handle("/", multiplex.Handler(webapp))
	srv := &http.Server{
		Handler: r,
		Addr: "localhost:8080",
		WriteTimeout: 15 * time.Second,
		ReadTimeout: 15 * time.Second,
	}

	log.Fatal(srv.ListenAndServe())

}


func (s *server) Tag(ctx context.Context, req *tagpb.TagRequest) (*tagpb.TagResponse, error) {
	//flow := req.GetTag().GetFlow()
	flow := req.Tag.Flow
	result := flow
	res := tagpb.TagResponse{
		Result: result,
	}
	return &res, nil
}

func (s *server) StreamTag(req *tagpb.StreamTagRequest, stream tagpb.StreamTagService_StreamTagServer) error {
	flow := req.Tag.Flow
	for i :=0; i<10; i++ {
		result := flow
		res := &tagpb.StreamTagResponse{
			Result: result,
		}
		stream.Send(res)
		time.Sleep(1 * time.Second)
	}
	return nil
}

func (s *server) StreamTagEveryone(stream tagpb.StreamTagEveryoneService_StreamTagEveryoneServer) error {
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			log.Fatalf("error while reading opcuaclient stream: %v", err)
			return err
		}
		flow := req.GetTag().GetFlow()
		result := flow
		sendErr := stream.Send(&tagpb.StreamTagEveryoneResponse{
			Result: result,
		})
		if sendErr != nil {
			return sendErr
		}
	}
}

type grpcMultiplexer struct {
	*grpcweb.WrappedGrpcServer
}

func (m *grpcMultiplexer) Handler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if m.IsGrpcWebRequest(r) {
			m.ServeHTTP(w, r)
			return
		}
		next.ServeHTTP(w, r)
	})
}