import { writeAsStringAsync } from 'expo-file-system'

export const storeSound = async (
  uri: string,
  file: string
): Promise<string> => {
  await writeAsStringAsync(uri, file, {
    encoding: 'base64',
  })

  return uri
}
