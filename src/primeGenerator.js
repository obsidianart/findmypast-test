module.exports = {
	generate: (n)=>{
		// I would probably use a memoization pattern here but
		// since I would just use a file for primes I'm not
		// gonna worry about multiple calls performances

    const limit = 42949672//95 //224737*224737
    const sieve = {
      0: 0,
      1: 0,
      2: 1
    }
    for (let i=3; i<limit; i++) {
      sieve[i] = 1
    }



    // const upperLimit = Math.sqrt(limit)
    const output = []

    // while(output.length<n) {
    //   const nextPrime = parseInt(Object.keys(sieve).find(key=>sieve[key]))

    //   console.log(parseInt(nextPrime))
    //   output.push(nextPrime)
    // }
    // sieve
    //   .forEach((el, i)=>{
    //     if (el) {
    //       for (let j = i * i; j < limit; j += i) {
    //         sieve[j] = 0
    //       }
    //     }
    //   })

    // for (let i = 2; i < limit && output.length<n; i++) {
    //     if(sieve[i]) {
    //         output.push(i)
    //     }
    // }

    return output
	}
}