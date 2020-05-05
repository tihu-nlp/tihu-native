import { TihuClient } from '../../generated/TihuServiceClientPb'
import { api } from '@config/api'

export const client = new TihuClient(api.url, null, null)
