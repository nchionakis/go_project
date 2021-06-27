package main

import (
	"context"
	"flag"
	"github.com/gopcua/opcua"
	"github.com/gopcua/opcua/debug"
	"github.com/gopcua/opcua/ua"
	"log"
)

var (
	endpoint = flag.String("endpoint", "opc.tcp://10.0.25.1:4840", "OPC UA Endpoint URL")
	nodeID   = flag.String("node", "ns=3;s=\"Test\"", "NodeID to read")
)


//func doTag() {
//	flow := read(c).(float64)
//	f := tagpb.Tag{Flow: flow}
//	log.Printf("%f", f.GetFlow())
//}

func Init() (c *opcua.Client){

	flag.BoolVar(&debug.Enable, "debug", false, "enable debug logging")
	flag.Parse()
	log.SetFlags(0)

	ctx := context.Background()

	c = opcua.NewClient(*endpoint, opcua.SecurityMode(ua.MessageSecurityModeNone))
	if err := c.Connect(ctx); err != nil {
		log.Fatal(err)
	}

	return c
}

func Read(c *opcua.Client) interface{} {


	id, err := ua.ParseNodeID(*nodeID)
	if err != nil {
		log.Fatalf("invalid node id: %v", err)
	}

	req := &ua.ReadRequest{
		MaxAge: 2000,
		NodesToRead: []*ua.ReadValueID{
			&ua.ReadValueID{NodeID: id},
		},
		TimestampsToReturn: ua.TimestampsToReturnBoth,
	}

	resp, err := c.Read(req)
	if err != nil {
		log.Fatalf("Read failed: %s", err)
	}
	if resp.Results[0].Status != ua.StatusOK {
		log.Fatalf("Status not OK: %v", resp.Results[0].Status)
	}

	return resp.Results[0].Value.Value()
}

func Close(c *opcua.Client) {
	defer c.Close()
}
