import grpc from 'grpc'
import { ITihuServer } from './generated/tihu_grpc_pb'
import { TihuService } from './generated/tihu_grpc_pb'
import { TihuServer } from './tihu-server'

const PORT = process.env.PORT || 50051
const HOST = process.env.HOST || 'localhost'
const ADDRESS = `${HOST}:${PORT}`

const server = new grpc.Server()

server.addService<ITihuServer>(TihuService, new TihuServer())

server.bind(ADDRESS, grpc.ServerCredentials.createInsecure())

server.start()
console.log(`Listening on ${ADDRESS}`)
