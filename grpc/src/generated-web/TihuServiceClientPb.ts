/**
 * @fileoverview gRPC-Web generated client stub for tihu
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

import * as grpcWeb from 'grpc-web'

import { Empty, SpeakReply, SpeakRequest, VersionReply } from './tihu_pb'

export class TihuClient {
  client_: grpcWeb.AbstractClientBase
  hostname_: string
  credentials_: null | { [index: string]: string }
  options_: null | { [index: string]: string }

  constructor(
    hostname: string,
    credentials: null | { [index: string]: string },
    options: null | { [index: string]: string }
  ) {
    if (!options) options = {}
    options['format'] = 'text'

    this.client_ = new grpcWeb.GrpcWebClientBase(options)
    this.hostname_ = hostname
    this.credentials_ = credentials
    this.options_ = options
  }

  methodInfoSpeak = new grpcWeb.AbstractClientBase.MethodInfo(
    SpeakReply,
    (request: SpeakRequest) => {
      return request.serializeBinary()
    },
    SpeakReply.deserializeBinary
  )

  speak(request: SpeakRequest, metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ + '/tihu.Tihu/Speak',
      request,
      metadata || {},
      this.methodInfoSpeak
    )
  }

  methodInfoVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    VersionReply,
    (request: Empty) => {
      return request.serializeBinary()
    },
    VersionReply.deserializeBinary
  )

  version(
    request: Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error, response: VersionReply) => void
  ) {
    return this.client_.rpcCall(
      this.hostname_ + '/tihu.Tihu/Version',
      request,
      metadata || {},
      this.methodInfoVersion,
      callback
    )
  }
}
