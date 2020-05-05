import dotenv from 'dotenv'
import { ExpoConfig, ConfigContext } from '@expo/config'

dotenv.config()

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  environment: {
    API_URL: process.env.API_URL || 'https://api.tihu.com',
  },
})
