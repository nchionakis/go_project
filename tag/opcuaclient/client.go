package main

import (
	"context"
	"fmt"
	"github.com/gopcua/opcua"
	"google.golang.org/grpc"
	"io"
	"log"
	"opcua/grpc/example/tag/tagpb"
	"time"
)



func main() {
	cc, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("%v", err)
	}
	defer cc.Close()
	c := tagpb.NewStreamTagEveryoneServiceClient(cc)
	// fmt.Printf("Created Client: %f", c)
	uc := Init()
	defer Close(uc)

	//doUnary(c,uc)

	//doServerStreaming(c, uc)



for {
	time.Sleep(500 * time.Millisecond)
	doBiDiStreaming(c, uc)
}


}

func doUnary(c tagpb.TagServiceClient, uc *opcua.Client) {
	req := &tagpb.TagRequest{
		Tag: &tagpb.Tag{},
	}

	res, err := c.Tag(context.Background(), req)
	if err != nil {
		log.Fatalf("error while calling Tag RPC: %v", err)
	}
	log.Printf("Response from Tag: %v", res.Result)
}

func doServerStreaming(c tagpb.StreamTagServiceClient, uc *opcua.Client) {

	//go Read(uc)
	flow := Read(uc).(float64)
	req := &tagpb.StreamTagRequest{
		Tag: &tagpb.Tag{Flow: flow},
	}

	fmt.Printf("flow: %f", flow)

	resStream, err := c.StreamTag(context.Background(), req)
	if err != nil {
		log.Fatalf("error while calling StreamTag RPC: %v", err)
	}
	for {
		msg, err := resStream.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatalf("error while reading stream: %v", err)
		}
		log.Printf("Response from Tag: %v", msg.GetResult())
	}
}


func doBiDiStreaming(c tagpb.StreamTagEveryoneServiceClient, uc *opcua.Client) {
	stream, err := c.StreamTagEveryone(context.Background())
	if err != nil {
		log.Fatalf("error while creating stream: %v", err)
	}

	req := []*tagpb.StreamTagEveryoneRequest{
		{Tag: &tagpb.Tag{Flow: Read(uc).(float64)},
		},
	}

	waitc := make(chan struct{})
	go func() {
		for _, req := range req {
			stream.Send(req)
			//time.Sleep( 1 * time.Second)
		}
		stream.CloseSend()

	}()

	go func() {
		for {
			res, err := stream.Recv()
			if err == io.EOF {
				break
			}
			if err != nil {
				log.Fatalf("%v", err)
				break
			}
			fmt.Println(res.GetResult())
		}
		close(waitc)
	}()

	<-waitc
}