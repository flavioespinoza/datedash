var _ = require('lodash')
var arr = [1, 2, 3]
_.each(arr, obj => {
	console.log(obj)
})
var compiled = _.template(require('./1.0.35.html'))
console.log(compiled())
