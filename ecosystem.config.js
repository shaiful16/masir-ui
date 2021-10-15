module.exports = {
  apps: [{
    name: 'miniecom',
    script: 'dist/multikart/server/main.js',
    instances: 1,
    autorestart: true,
    watch: false,
    error_file: 'err.log',
    out_file: 'out.log',
    log_file: 'combined.log',
    time: true,
    env: {
    },
  }],
};
