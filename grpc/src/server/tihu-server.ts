import grpc from 'grpc'
import {
  Empty,
  VersionReply,
  SpeakReply,
  SpeakRequest,
} from '../generated/tihu_pb'
import { ITihuServer } from '../generated/tihu_grpc_pb'
import { logCall } from './logging'
import { loadAsset } from './utils'

const SAMPLE_1 = loadAsset('sample.wav')
const SAMPLE_2 = loadAsset('sample2.wav')

let state = false

export class TihuServer implements ITihuServer {
  speak: grpc.handleServerStreamingCall<SpeakRequest, SpeakReply> = (call) => {
    logCall(call)

    const reply = new SpeakReply()
    reply.setTags('##__TODO__##')

    const wave = state ? SAMPLE_2 : SAMPLE_1
    state = !state

    reply.setWave(wave)

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
