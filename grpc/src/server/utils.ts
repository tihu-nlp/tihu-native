import { readFileSync } from 'fs'
import { join } from 'path'

export const loadAsset = (fileName: string): Uint8Array => {
  const file = readFileSync(join(__dirname, '..', '..', 'assets', fileName))
  return new Uint8Array(file)
}
