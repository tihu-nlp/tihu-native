import Constants from 'expo-constants'
import { documentDirectory } from 'expo-file-system'

export const config = {
  api: {
    url: Constants.manifest.environment.API_URL,
  },
  fileSystem: {
    downloadPath: `${documentDirectory}/downloads`,
  },
  style: {
    viewPadding: 16,
  },
}
