#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

OUT_DIR="./src/generated-web"

mkdir -p ${OUT_DIR}

yarn grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:$OUT_DIR \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR \
  tihu.proto
