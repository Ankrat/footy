module.exports = {
  options: {
    // enable the combass lib
    compass: false
  },
	dev: {
		options: {
			style: 'expanded',
      lineNumbers: true
		},
		files: {
			'src/styles/style.css': 'src/sass/style.scss'
		}
	},
  build: {
    options: {
      style: 'compact'
    },
    files: {
      'src/styles/style.compact.css': 'src/sass/style.scss'
    }
  },
  styleguide: {
    options: {
      style: 'expanded'
    },
    files: {
      'src/styles/nested/style.css': 'src/sass/style.scss'
    }
  }
}