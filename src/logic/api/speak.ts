// temporarily load a sample audio file
// until grpc set up
import { Asset } from 'expo-asset'
const { uri } = Asset.fromModule(require('../../../assets/sample.wav'))

export const apiSpeak = (value: string) =>
  new Promise<string>(async (resolve) => {
    // for now simulate fetch
    setTimeout(() => {
      resolve(uri)
    }, 1000)
  })
