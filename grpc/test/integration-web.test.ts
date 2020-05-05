// polyfill XMLHttpRequest because grpc-web is for use with
// web api - and nodejs doesn't provide it
;(global as any).XMLHttpRequest = require('xhr2')

import { TihuClient } from '../src/generated-web/TihuServiceClientPb'
import { Empty, SpeakRequest, SpeakReply } from '../src/generated-web/tihu_pb'

describe('integration-web', () => {
  const client = new TihuClient('http://localhost:8080', null, null)

  it('calls version', (done) => {
    client.version(new Empty(), null, (err, res) => {
      const result = res.getVersion()
      expect(result).toBeDefined()
      done()
    })
  })

  it('calls speak', (done) => {
    const request = new SpeakRequest()
    request.setVoice(SpeakRequest.Voice.MBROLA_FEMALE)
    request.setText('شتر دیدی ندیدی')

    const call = client.speak(request)

    let result = ''

    call.on('data', (chunk: SpeakReply) => {
      expect(chunk).toBeDefined()
      result += chunk.getWave_asB64()
    })

    call.on('error', (err) => {
      expect(err).toBeUndefined()
      done()
    })

    call.on('end', async () => {
      expect(result.length).toBeGreaterThan(0)
      done()
    })
  })
})
