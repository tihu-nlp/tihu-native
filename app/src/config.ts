import Constants from 'expo-constants'
import * as FileSystem from 'expo-file-system'

export const config = {
  api: {
    url: Constants.manifest.environment.API_URL,
  },
  fileSystem: {
    downloadPath: `${FileSystem.documentDirectory}/downloads`,
  },
  style: {
    viewPadding: 16,
  },
}
