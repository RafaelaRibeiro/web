module.exports = {
  apps: [
    {
      name: 'web',
      exec_mode: 'cluster',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
