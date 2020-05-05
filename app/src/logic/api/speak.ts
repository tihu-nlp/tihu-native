import * as Crypto from 'expo-crypto'
import * as FileSystem from 'expo-file-system'
import { SpeakRequest, SpeakReply } from '../../generated/tihu_pb'
import { client } from './client'
import { fs } from '@config/fs'

export const speak = (
  text: string,
  voice: SpeakRequest.Voice = SpeakRequest.Voice.MBROLA_FEMALE
) =>
  new Promise<string>(async (resolve, reject) => {
    const request = new SpeakRequest()
    request.setVoice(voice)
    request.setText(text)

    const fileName = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      text
    )

    const uri = `${fs.downloadPath}/${fileName}`

    const call = client.speak(request)

    let result = ''

    call.on('data', (chunk: SpeakReply) => {
      result += chunk.getWave_asB64()
    })

    call.on('error', (err) => {
      reject(err)
    })

    call.on('end', async () => {
      await FileSystem.writeAsStringAsync(uri, result, {
        encoding: 'base64',
      })
      resolve(uri)
    })
  })
