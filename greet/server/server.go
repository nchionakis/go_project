package main

import (
	"awesomeProject/go_project/greet/greetpb"
	"context"
	"google.golang.org/grpc"
	"log"
	"net"
)

type server struct {
	greetpb.UnimplementedGreetServiceServer
}
func main() {

	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	srvr := grpc.NewServer()

	greetpb.RegisterGreetServiceServer(
		srvr,
		&server{},
	)

	if err := srvr.Serve(lis); err != nil {
		log.Fatalln("failed to serve", err)
	}
}


func (s *server) Greet(ctx context.Context, req *greetpb.GreetRequest) (*greetpb.GreetResponse, error) {
	firstName := req.GetGreeting().GetFirstName()
	result := "Hello " + firstName
	res := greetpb.GreetResponse{
		Result: result,
	}
	return &res, nil
}