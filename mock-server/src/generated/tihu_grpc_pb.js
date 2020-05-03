// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tihu_pb = require('./tihu_pb.js');

function serialize_tihu_Empty(arg) {
  if (!(arg instanceof tihu_pb.Empty)) {
    throw new Error('Expected argument of type tihu.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tihu_Empty(buffer_arg) {
  return tihu_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tihu_SpeakReply(arg) {
  if (!(arg instanceof tihu_pb.SpeakReply)) {
    throw new Error('Expected argument of type tihu.SpeakReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tihu_SpeakReply(buffer_arg) {
  return tihu_pb.SpeakReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tihu_SpeakRequest(arg) {
  if (!(arg instanceof tihu_pb.SpeakRequest)) {
    throw new Error('Expected argument of type tihu.SpeakRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tihu_SpeakRequest(buffer_arg) {
  return tihu_pb.SpeakRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tihu_VersionReply(arg) {
  if (!(arg instanceof tihu_pb.VersionReply)) {
    throw new Error('Expected argument of type tihu.VersionReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tihu_VersionReply(buffer_arg) {
  return tihu_pb.VersionReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var TihuService = exports.TihuService = {
  speak: {
    path: '/tihu.Tihu/Speak',
    requestStream: false,
    responseStream: true,
    requestType: tihu_pb.SpeakRequest,
    responseType: tihu_pb.SpeakReply,
    requestSerialize: serialize_tihu_SpeakRequest,
    requestDeserialize: deserialize_tihu_SpeakRequest,
    responseSerialize: serialize_tihu_SpeakReply,
    responseDeserialize: deserialize_tihu_SpeakReply,
  },
  version: {
    path: '/tihu.Tihu/Version',
    requestStream: false,
    responseStream: false,
    requestType: tihu_pb.Empty,
    responseType: tihu_pb.VersionReply,
    requestSerialize: serialize_tihu_Empty,
    requestDeserialize: deserialize_tihu_Empty,
    responseSerialize: serialize_tihu_VersionReply,
    responseDeserialize: deserialize_tihu_VersionReply,
  },
};

exports.TihuClient = grpc.makeGenericClientConstructor(TihuService);
