# tihu-native-proxy

Envoy proxy to support grpc over http 1.1

This is required for web based clients like expo react-native

## Usage

```sh
docker build -t tihu-grpc-proxy:latest
docker run -d -p 8080:8080 --name tihu-grpc-proxy tihu-grpc-proxy:latest
```

## License

MIT
