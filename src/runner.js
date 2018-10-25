const cli = require('./cli')
const primeGenerator = require('./primeGenerator')
const matrixGenerator = require('./matrixGenerator')

module.exports = ()=>{
  const N = cli.getNumber()
  const primes = primeGenerator.generate(N)
  console.log(primes)
}
