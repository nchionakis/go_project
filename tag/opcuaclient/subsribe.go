package main

import (
	"context"
	"github.com/gopcua/opcua"
	"github.com/gopcua/opcua/monitor"
	"log"
	"os"
	"os/signal"
	"time"
)

func main() {
	endpoint := "opc.tcp://127.0.0.1:49320"
	node1 := "ns=2;s=Channel1.Device1.Tag1"
	node2 := "ns=2;s=Chaannel1.Device1.Tag2"
	//interval := opcua.DefaultSubscriptionInterval
	interval := 50 * time.Millisecond
	//var value2 uint16 = 2300


	signalCh := make(chan os.Signal, 1)
	signal.Notify(signalCh, os.Interrupt)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	go func() {
		<-signalCh
		cancel()
	}()

	c := opcua.NewClient(endpoint)
	defer func(c *opcua.Client) {
		err := c.Close()
		if err != nil {
			log.Fatalln(err)
		}
	}(c)

	if err := c.Connect(ctx); err != nil {
		log.Fatal(err)
	}

	m, err := monitor.NewNodeMonitor(c)
	if err != nil {
		log.Fatal(err)
	}

	m.SetErrorHandler(func(_ *opcua.Client, sub *monitor.Subscription, err error) {
		log.Printf("error: sub=%d err=%s", sub.SubscriptionID(), err.Error())
	})


	//write(node2, value2, c)


	go func() {

		startChanSub(ctx, m, interval, node1)

	}()


	go func() {

		startChanSub(ctx, m, interval, node2)

	}()






	<-ctx.Done()

}

func startChanSub(ctx context.Context, m *monitor.NodeMonitor, interval time.Duration, nodes ...string) {

	c := make(chan *monitor.DataChangeMessage)

	sub, err := m.ChanSubscribe(ctx, &opcua.SubscriptionParameters{Interval: interval}, c, nodes...)
	defer sub.Unsubscribe()
	if err != nil {
		log.Fatal(err)
	}

	for {
		select {
		case <-ctx.Done():
			return
		case msg := <-c:
			if msg.Error != nil {
				log.Printf("[channel ] sub=%d error=%s", sub.SubscriptionID(), msg.Error)
			} else {
				log.Printf("[channel ] sub=%d ts=%s node=%s value=%v", sub.SubscriptionID(), msg.SourceTimestamp.UTC().Format(time.RFC3339), msg.NodeID, msg.Value.Value())
			}
		}
	}

}


