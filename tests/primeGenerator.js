const test = require('tape')
const primeGenerator = require('../src/primeGenerator')

test('Generate 1 prime number', function (t) {
  const primes = primeGenerator.generate(1)
  const expected = [2]
  t.same(primes, expected)
  t.end()
})

test('Generate 46 prime number', function (t) {
  const primes = primeGenerator.generate(46)
  const expected = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199]
  t.same(primes, expected)
  t.end()
})

test('Generate 30000 prime numbers', function (t) {
  const primes = primeGenerator.generate(30000)
  const expected = [2]
  t.equal(primes[30000-1],  350377)
  t.end()
})