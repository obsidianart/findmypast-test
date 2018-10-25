var test = require('tape')
var sinon = require('sinon')
const runner = require('../src/runner')

while (process.argv.length >2 ) process.argv.pop() //Remove test runner args

test('It should return correct output', function (t) {
	process.argv.push(`2`)
	t.plan(3)

	sinon.spy(console, 'log')

	runner()

	t.same(console.log.getCall(0).args, ['|   |2 |3|'])
	t.same(console.log.getCall(1).args, ['| 2 |4 |6|'])
	t.same(console.log.getCall(2).args, ['| 3 |6 |9|'])

	console.log.restore()
	t.end()

	process.argv.pop()
})