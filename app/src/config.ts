import * as FileSystem from 'expo-file-system'

export const config = {
  api: {
    url: process.env.API_URL || 'http://192.168.178.16:8080',
  },
  fileSystem: {
    downloadPath: `${FileSystem.documentDirectory}/${
      process.env.DOWNLOAD_PATH || 'audio'
    }`,
  },
  style: {
    viewPadding: 16,
  },
}
