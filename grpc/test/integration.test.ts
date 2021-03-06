import { createWriteStream, existsSync, unlinkSync, mkdirSync } from 'fs'
import { join } from 'path'
import grpc from 'grpc'
import { TihuClient } from '../src/generated/tihu_grpc_pb'
import { Empty, SpeakRequest, SpeakReply } from '../src/generated/tihu_pb'

const OUTPUT_DIR = join(__dirname, 'out')
const OUTPUT_FILE = join(OUTPUT_DIR, 'sample.wav')

jest.setTimeout(20 * 1000) // 20 seconds

describe('server', () => {
  beforeAll(() => {
    if (existsSync(OUTPUT_FILE)) {
      unlinkSync(OUTPUT_FILE)
    }
    if (!existsSync(OUTPUT_DIR)) {
      mkdirSync(OUTPUT_DIR)
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
      expect(version).toBeDefined()
      done()
    })
  })

  it('calls speak', (done) => {
    const request = new SpeakRequest()
    request.setVoice(SpeakRequest.Voice.MBROLA_FEMALE)
    request.setText('شتر دیدی ندیدی')

    const reply = client.speak(request)

    const stream = createWriteStream(OUTPUT_FILE)

    reply.on('data', (chunk: SpeakReply) => {
      expect(chunk).toBeDefined()
      stream.write(chunk.getWave_asU8())
    })

    reply.on('error', (err) => {
      expect(err).toBeUndefined()
      done()
    })

    reply.on('end', () => {
      expect(existsSync(OUTPUT_FILE)).toBe(true)
      done()
    })
  })
})
