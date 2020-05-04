# tihu-native

[![dependencies Status](https://david-dm.org/tihu/tihu-native/status.svg)](https://david-dm.org/tihu/tihu-native) [![devDependencies Status](https://david-dm.org/tihu/tihu-native/dev-status.svg)](https://david-dm.org/tihu/tihu-native?type=dev)

tihu mobile app mono repo

## Pre-requisites

- NodeJS
- Yarn

## Usage

Install dependencies

```sh
yarn
```

Run the app using expo

```sh
yarn start
```

Run the app and mock server in parallel

```sh
yarn start:mock
```

Run mock server stand-alone

```sh
yarn mock-api
```

## Packages

### app

React-native app

[README](../master/app/README.md)

### grpc

Mocked `gRPC` api for testing purposes

[README](../master/grpc/README.md)

## Todo

- ✔️ Basic functionality with static audio
- ✔️ Convert to lerna mono repo
- ✔️ Mocked gRPC server
- ◻️ gRPC client
- ◻️ Get tihu to work with generated client code
- ◻️ Use tihu
- ◻️ Download file
- ◻️ Settings (voice, pitch)
- ◻️ Finish design
- ◻️ Error flow
- ◻️ Add rate limiting to tihu server
- ◻️ Test iOS
- ◻️ Test iOS tablet
- ◻️ Test Android
- ◻️ Test Android tablet
- ◻️ (Optional) Web view
- ◻️ CI/CD
- ◻️ Cleanup, package and release

## License

MIT
