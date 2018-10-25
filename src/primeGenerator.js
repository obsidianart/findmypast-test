module.exports = {
	generate: (n)=>{
		// I would probably use a memoization pattern here but
		// since I would just use a file for primes I'm not
		// gonna worry about multiple calls performances

    const limit = 42949672//95 //224737*224737
    const sieve = new Array(30000).fill(1)
    sieve[0] = 0 // set the number 0 to not prime
    sieve[1] = 0 // set the number 1 to not prime

    const upperLimit = Math.sqrt(limit)
    const output = []

    sieve
      .forEach((el, i)=>{
        if (el) {
          for (let j = i * i; j < limit; j += i) {
            sieve[j] = 0
          }
        }
      })

    for (let i = 2; i < limit && output.length<n; i++) {
        if(sieve[i]) {
            output.push(i)
        }
    }

    return output
	}
}