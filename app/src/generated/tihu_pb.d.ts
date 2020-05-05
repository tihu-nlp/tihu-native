import * as jspb from 'google-protobuf'

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Empty.AsObject
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject
  static serializeBinaryToWriter(
    message: Empty,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): Empty
  static deserializeBinaryFromReader(
    message: Empty,
    reader: jspb.BinaryReader
  ): Empty
}

export namespace Empty {
  export type AsObject = {}
}

export class SpeakRequest extends jspb.Message {
  getText(): string
  setText(value: string): void

  getVoice(): SpeakRequest.Voice
  setVoice(value: SpeakRequest.Voice): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): SpeakRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: SpeakRequest
  ): SpeakRequest.AsObject
  static serializeBinaryToWriter(
    message: SpeakRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): SpeakRequest
  static deserializeBinaryFromReader(
    message: SpeakRequest,
    reader: jspb.BinaryReader
  ): SpeakRequest
}

export namespace SpeakRequest {
  export type AsObject = {
    text: string
    voice: SpeakRequest.Voice
  }

  export enum Voice {
    MBROLA_MALE = 0,
    MBROLA_FEMALE = 1,
    ESPEAK_MALE = 2,
    ESPEAK_FEMALE = 3,
  }
}

export class SpeakReply extends jspb.Message {
  getWave(): Uint8Array | string
  getWave_asU8(): Uint8Array
  getWave_asB64(): string
  setWave(value: Uint8Array | string): void

  getTags(): string
  setTags(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): SpeakReply.AsObject
  static toObject(
    includeInstance: boolean,
    msg: SpeakReply
  ): SpeakReply.AsObject
  static serializeBinaryToWriter(
    message: SpeakReply,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): SpeakReply
  static deserializeBinaryFromReader(
    message: SpeakReply,
    reader: jspb.BinaryReader
  ): SpeakReply
}

export namespace SpeakReply {
  export type AsObject = {
    wave: Uint8Array | string
    tags: string
  }
}

export class VersionReply extends jspb.Message {
  getVersion(): string
  setVersion(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): VersionReply.AsObject
  static toObject(
    includeInstance: boolean,
    msg: VersionReply
  ): VersionReply.AsObject
  static serializeBinaryToWriter(
    message: VersionReply,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): VersionReply
  static deserializeBinaryFromReader(
    message: VersionReply,
    reader: jspb.BinaryReader
  ): VersionReply
}

export namespace VersionReply {
  export type AsObject = {
    version: string
  }
}
