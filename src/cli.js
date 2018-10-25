const minimist = require('minimist')
const fs = require('fs')

module.exports = {
  getNumber: ()=> {
    var argv = minimist(process.argv.slice(2))
    const num = parseInt(argv._[0])

    if (!Number.isInteger(num)) {
      throw new Error('Please specifiy a number. e.g. 10')
    }

    if (!(num>0)) {
      throw new Error('Please specifiy a positive number. e.g. 10')
    }

    return num
  }
}