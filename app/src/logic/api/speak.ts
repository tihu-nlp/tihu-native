import { SpeakRequest, SpeakReply } from '../../generated/tihu_pb'
import { client } from './client'

export const speak = (
  text: string,
  voice: SpeakRequest.Voice = SpeakRequest.Voice.MBROLA_FEMALE
) =>
  new Promise<string>(async (resolve, reject) => {
    const request = new SpeakRequest()
    request.setVoice(voice)
    request.setText(text)

    const call = client.speak(request)

    let result = ''

    call.on('data', (chunk: SpeakReply) => {
      result += chunk.getWave_asB64()
    })

    call.on('error', (err) => {
      reject(err)
    })

    call.on('end', async () => {
      resolve(result)
    })
  })
