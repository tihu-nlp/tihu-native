module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@app': './src',
            '@containers': './src/containers',
            '@components': './src/components',
            '@logic': './src/logic',
            '@utils': './src/utils',
            '@views': './src/views',
          },
        },
      ],
    ],
  }
}
