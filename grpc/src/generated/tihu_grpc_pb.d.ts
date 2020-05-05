// package: tihu
// file: tihu.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as tihu_pb from "./tihu_pb";

interface ITihuService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    speak: ITihuService_ISpeak;
    version: ITihuService_IVersion;
}

interface ITihuService_ISpeak extends grpc.MethodDefinition<tihu_pb.SpeakRequest, tihu_pb.SpeakReply> {
    path: string; // "/tihu.Tihu/Speak"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<tihu_pb.SpeakRequest>;
    requestDeserialize: grpc.deserialize<tihu_pb.SpeakRequest>;
    responseSerialize: grpc.serialize<tihu_pb.SpeakReply>;
    responseDeserialize: grpc.deserialize<tihu_pb.SpeakReply>;
}
interface ITihuService_IVersion extends grpc.MethodDefinition<tihu_pb.Empty, tihu_pb.VersionReply> {
    path: string; // "/tihu.Tihu/Version"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<tihu_pb.Empty>;
    requestDeserialize: grpc.deserialize<tihu_pb.Empty>;
    responseSerialize: grpc.serialize<tihu_pb.VersionReply>;
    responseDeserialize: grpc.deserialize<tihu_pb.VersionReply>;
}

export const TihuService: ITihuService;

export interface ITihuServer {
    speak: grpc.handleServerStreamingCall<tihu_pb.SpeakRequest, tihu_pb.SpeakReply>;
    version: grpc.handleUnaryCall<tihu_pb.Empty, tihu_pb.VersionReply>;
}

export interface ITihuClient {
    speak(request: tihu_pb.SpeakRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<tihu_pb.SpeakReply>;
    speak(request: tihu_pb.SpeakRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<tihu_pb.SpeakReply>;
    version(request: tihu_pb.Empty, callback: (error: grpc.ServiceError | null, response: tihu_pb.VersionReply) => void): grpc.ClientUnaryCall;
    version(request: tihu_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tihu_pb.VersionReply) => void): grpc.ClientUnaryCall;
    version(request: tihu_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tihu_pb.VersionReply) => void): grpc.ClientUnaryCall;
}

export class TihuClient extends grpc.Client implements ITihuClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public speak(request: tihu_pb.SpeakRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<tihu_pb.SpeakReply>;
    public speak(request: tihu_pb.SpeakRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<tihu_pb.SpeakReply>;
    public version(request: tihu_pb.Empty, callback: (error: grpc.ServiceError | null, response: tihu_pb.VersionReply) => void): grpc.ClientUnaryCall;
    public version(request: tihu_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tihu_pb.VersionReply) => void): grpc.ClientUnaryCall;
    public version(request: tihu_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tihu_pb.VersionReply) => void): grpc.ClientUnaryCall;
}
