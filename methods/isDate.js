const _ = require('lodash')

let invalid_date = new Date('5/33/19')
let x = JSON.stringify(invalid_date)
console.log(typeof x)
console.log(invalid_date) // typeof object => Invalid Date
console.log(JSON.stringify(invalid_date)) // => null
console.log(_.isDate(invalid_date)) // => true

let valid_date = new Date('5/3/19')
console.log(valid_date) // => Fri May 03 2019 00:00:00 GMT-0600 (Mountain Daylight Time)
console.log(JSON.stringify(valid_date)) // => "2019-05-03T06:00:00.000Z"
console.log(_.isDate(valid_date)) // true
