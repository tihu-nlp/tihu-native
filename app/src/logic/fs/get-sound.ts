import { getInfoAsync } from 'expo-file-system'
import { digestStringAsync, CryptoDigestAlgorithm } from 'expo-crypto'
import { config } from '@app/config'

export const getSound = async (
  text: string
): Promise<{
  uri: string
  exists: boolean
}> => {
  const fileName = await digestStringAsync(CryptoDigestAlgorithm.SHA256, text)
  const uri = `${config.fileSystem.downloadPath}/${fileName}`
  const exists = (await getInfoAsync(uri)).exists

  return {
    uri,
    exists,
  }
}
