const test = require('tape')
const matrixGenerator = require('../src/matrixGenerator')

test('Generate a table for 1 prime', function (t) {
  const table = matrixGenerator.generate([2])
  const expected = [['',2][2,4]]
  t.same(table, expected)
  t.end()
})

test('Generate a table for primes', function (t) {
  const table = matrixGenerator.generate([2,3,5])
  const expected = [
    ['', 2,  3,   5],
    [2 , 4,  6,  10],
    [3 , 6,  9,  15],
    [5 , 10, 15, 25],
  ]

  t.same(table, expected)
  t.end()
})