module.exports = {
  options: {
    livereload: true,
  },
  html:{
    files: ['src/*.html']
  },
  css:{
    files: ['src/sass/**/*.scss'],
    tasks: ['sass:dev'],
    options: {
      spawn: false,
    }
  },
  scripts: {
    files: ['src/scripts/**/*.js'],
    tasks: ['jshint'],
    options: {
      spawn: false,
    }
  }
}