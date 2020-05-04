import { readFileSync } from 'fs'
import { join } from 'path'
import grpc from 'grpc'
import {
  Empty,
  VersionReply,
  SpeakReply,
  SpeakRequest,
} from '../generated/tihu_pb'
import { ITihuServer } from '../generated/tihu_grpc_pb'
import { log, logCall } from './logging'

const SAMPLE = readFileSync(join(__dirname, '..', '..', 'assets', 'sample.wav'))
const AS_ARRAY = new Uint8Array(SAMPLE)

export class TihuServer implements ITihuServer {
  speak: grpc.handleServerStreamingCall<SpeakRequest, SpeakReply> = (call) => {
    logCall(call)

    const reply = new SpeakReply()
    reply.setWave(AS_ARRAY)
    reply.setTags('##__TODO__##')

    call.write(reply, (err) => {
      if (err) {
        call.emit('error', err)
      }
      call.end()
    })
  }

  version: grpc.handleUnaryCall<Empty, VersionReply> = (call, callback) => {
    logCall(call)

    const reply = new VersionReply()
    reply.setVersion('1')
    callback(null, reply)
  }
}
