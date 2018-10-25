const cli = require('./cli')
const primeGenerator = require('./primeGenerator')
const matrixGenerator = require('./matrixGenerator')

module.exports = ()=>{
  const N = cli.getNumber()
  const primes = primeGenerator.generate(N)
  const matrix = matrixGenerator.generate(primes)

  matrix.forEach(line=>{
  	console.log(`| ${line.join(' |')}|`)
  })
}
