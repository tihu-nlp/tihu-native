# tihu-grpc-js

- NodeJS client code for tihu api
- Mock implementation of the tihu `gRPC` api for testing purposes

## Usage

### Local

```sh
yarn
yarn start
# with auto-restart
yarn dev
```

### Docker

```sh
docker build -t tihu-mock-api:latest .
docker run -d -p 50051:50051 --name tihu-mock-api tihu-mock-api:latest
```

## Test

```sh
# launch the server
yarn start
# run tests
yarn test
# or run tests in watch mode
yarn test:watch
```

## License

MIT
