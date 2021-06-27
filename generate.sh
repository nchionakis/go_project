protoc --go_out=. person.proto
protoc --go-grpc_out=. person.proto
protoc --js_out=. person.proto
protoc --grpc-web_out=mode=grpcweb:. tag.proto
