import { I18nManager } from 'react-native'
import * as FileSystem from 'expo-file-system'
import { config } from '@app/config'

/**
 * App bootstrap logic
 */
export const bootstrap = async () => {
  I18nManager.forceRTL(true)

  // create download dir
  if (!(await FileSystem.getInfoAsync(config.fileSystem.downloadPath)).exists) {
    await FileSystem.makeDirectoryAsync(config.fileSystem.downloadPath)
  }
}
