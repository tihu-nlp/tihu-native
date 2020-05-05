import { TihuClient } from '../../generated/TihuServiceClientPb'
import { config } from '@app/config'

export const client = new TihuClient(config.api.url, null, null)
