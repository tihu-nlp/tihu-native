# tihu-native

[![dependencies Status](https://david-dm.org/tihu/tihu-native/status.svg)](https://david-dm.org/tihu/tihu-native) [![devDependencies Status](https://david-dm.org/tihu/tihu-native/dev-status.svg)](https://david-dm.org/tihu/tihu-native?type=dev)

tihu mobile app mono repo

## Pre-requisites

- NodeJS
- Yarn

## Usage

> The app doesn't point to a working grpc api
> To test the app run the proxy and either the mock api or actual api and point the app to it by setting `API_URL` in `app/.env`. [See readmes on how to deploy api](#Packages).

Install dependencies and run the app using expo

```sh
yarn
yarn start
```

## Packages

### app

React-native app

[README](../master/app/README.md)

### grpc

Javascript/typescript client and mock grpc api

[README](../master/grpc/README.md)

### proxy

Envoy proxy to support grpc over http 1.1

[README](../master/proxy/README.md)

## Todo

- ✔️ Basic functionality with static audio
- ✔️ Convert to lerna mono repo
- ✔️ Mocked gRPC server
- ✔️ Call gRPC from app
- ✔️ Environment variables for config in app
- ◻️ CI/CD for docker images:
  - ◻️ tihu-api
  - ◻️ tihu-mock-api
  - ◻️ tihu-api-proxy
- ◻️ Docker-compose for mock
- ◻️ Use actual tihu api
- ◻️ Docker-compose for actual
- ◻️ Import js client from grpc package (fix expo error)
- ◻️ Download file
- ◻️ Settings (voice, pitch)
- ◻️ Finish design
- ◻️ Error flow
- ◻️ Add rate limiting to tihu api or proxy
- ◻️ Test iOS
- ◻️ Test iOS tablet
- ◻️ Test Android
- ◻️ Test Android tablet
- ◻️ Test Web
- ◻️ Deploy tihu-api and tihu-proxy

## License

MIT
