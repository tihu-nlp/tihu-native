import { createWriteStream, existsSync, unlinkSync } from 'fs'
import { join } from 'path'
import grpc from 'grpc'
import { TihuClient } from '../src/generated/tihu_grpc_pb'
import { Empty, SpeakRequest, SpeakReply } from '../src/generated/tihu_pb'

const OUTPUT_FILE = join(__dirname, 'out', 'sample.wav')

describe('server', () => {
  beforeAll(() => {
    if (existsSync(OUTPUT_FILE)) {
      unlinkSync(OUTPUT_FILE)
    }
  })

  const client = new TihuClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
  )

  it('calls version', async (done) => {
    client.version(new Empty(), (err, res) => {
      expect(err).toBeNull()
      expect(res).toBeDefined()
      const version = res.getVersion()
      expect(version).toBe('1')
      done()
    })
  })

  it('calls speak', (done) => {
    const request = new SpeakRequest()
    request.setVoice(SpeakRequest.Voice.MBROLA_FEMALE)
    request.setText("doesn't matter it's mocked")

    const reply = client.speak(request)

    const stream = createWriteStream(OUTPUT_FILE)

    reply.on('data', (chunk: SpeakReply) => {
      const asU8 = chunk.getWave_asU8()
      stream.write(asU8)
    })

    reply.on('error', (err) => {
      expect(err).toBeUndefined()
      done()
    })

    reply.on('end', () => {
      done()
    })
  })
})
