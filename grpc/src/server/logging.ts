import pino from 'pino'

const logger = pino({
  prettyPrint: { colorize: true },
  level: 'debug',
})

export const logCall = ({
  request,
  metadata,
}: {
  request: any
  metadata: any
}): void => {
  log({ request, metadata })
}

export const log = (
  target: any,
  level: 'debug' | 'info' | 'error' | 'warn' = 'debug'
): void => {
  logger[level](target)
}
