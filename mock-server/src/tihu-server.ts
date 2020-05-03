import grpc from 'grpc'
import {
  Empty,
  VersionReply,
  SpeakReply,
  SpeakRequest,
} from './generated/tihu_pb'
import { ITihuServer } from './generated/tihu_grpc_pb'

export class TihuServer implements ITihuServer {
  speak: grpc.handleServerStreamingCall<SpeakRequest, SpeakReply> = (call) => {
    throw new Error('not implemented')
  }
  version: grpc.handleUnaryCall<Empty, VersionReply> = (call, callback) => {
    throw new Error('not implemented')
  }
}
