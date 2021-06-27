package main

import (
	"encoding/json"
	"fmt"
	"google.golang.org/protobuf/proto"
	"io/ioutil"
	"log"
	"opcua/grpc/example/person/personpb"
)

func main() {

	// to and from file
	p := doPerson()
	err := writeToFile("person.bin", p)
	if err != nil {
		return
	}

	p2 := &personpb.Person{}
	readFromFile("person.bin", p2)
	fmt.Println(p2)

	// to and from JSON
	s, _ := toJSON(p)
	fmt.Println(s)

	p3:= &personpb.Person{}
	fromJSON(s,p3)
	fmt.Println(p3)

}

func doPerson() *personpb.Person {
	p := personpb.Person{
		Age:               33,
		FirstName:         "Nikolaos",
		LastName:          "Chionakis",
		IsProfileVerified: true,
		Height:            1.87,
		EyeColor:          personpb.Person_EYE_BLUE,
		Addresses: 	[]*personpb.Person_Address{
			&personpb.Person_Address{
				AddressLine_1: "Navarinou 18",
				AddressLine_2: "Dim. Rigou 45",
				ZipCode:       "17234",
				City:          "Athens",
				Country:       "Greece",
			},
		},
	}

	fmt.Println(p.GetAge())

	return &p
}

func writeToFile(fname string, pb proto.Message) error {
	out, err := proto.Marshal(pb)
	if err != nil {
		log.Fatalln("Can't serialize to bytes", err)
		return err
	}

	if err := ioutil.WriteFile(fname, out, 0644); err != nil {
		log.Fatalln("Can't write to file", err)
		return err
	}

	fmt.Println("Data has been written")
	return nil
}

func readFromFile(fname string, pb proto.Message) error {
	in, err := ioutil.ReadFile(fname)
	if err != nil {
		log.Fatalln("Something went wrong when reading the file", err)
		return err
	}

	err2 := proto.Unmarshal(in, pb)
	if err2 != nil {
		log.Fatalln("Couldn't put the bytes into the protocil buffres struct", err2)
		return err2
	}

	return nil
}

func toJSON(pb proto.Message) (string, error) {
	out, err := json.Marshal(pb)
	if err != nil {
		log.Fatalln("Can't convert to JSON", err)
		return  " ", err
	}

	return string(out), nil
}

func fromJSON(in string, pb proto.Message) {
	err := json.Unmarshal([]byte(in), pb)
	if err != nil {
		log.Fatalln("Can't unmarshal the JSON into the pb struct", err)
	}
}