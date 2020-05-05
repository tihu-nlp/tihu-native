import * as FileSystem from 'expo-file-system'

export const fs = {
  downloadPath: `${FileSystem.documentDirectory}/${
    process.env.DOWNLOAD_PATH || 'audio'
  }`,
}
