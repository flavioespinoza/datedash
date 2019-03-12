module.exports = function() {
   return {
      files: ['methods/**/*.js'],

	  tests: ['test/**/*.test.js'],

	  env: {
		type: 'node',
		params: {
		  runner: `-r ${require.resolve('esm')}`
		}
	  }
   }
}

