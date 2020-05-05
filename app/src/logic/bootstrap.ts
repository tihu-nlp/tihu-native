import { I18nManager } from 'react-native'
import * as FileSystem from 'expo-file-system'
import { fs } from '@config/fs'
import { makeDirectoryAsync } from 'expo-file-system'

/**
 * App bootstrap logic
 */
export const bootstrap = async () => {
  I18nManager.forceRTL(true)

  // create download dir
  if (!(await FileSystem.getInfoAsync(fs.downloadPath)).exists) {
    await FileSystem.makeDirectoryAsync(fs.downloadPath)
  }
}
