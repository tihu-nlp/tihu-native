# tihu-native

tihu mobile app mono repo

## Usage

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
yarn mock-server
```

## Packages

### app

React-native app

[README](../blob/master/app/README.md)

### mock-server

Mocked `gRPC` server for testing purposes

[README](../blob/master/mock-server/README.md)

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
