module.exports = {
  generate: (n)=>{
    // I would probably use a memoization pattern here but
    // since I would just use a file for primes I'm not
    // gonna worry about multiple calls performances

    const limit = 611953 // 4294967295 is the highest element in an Array but I can't get that far
    const sieve = new Array(611953).fill(1)
    sieve[0] = 0 // set the number 0 to not prime
    sieve[1] = 0 // set the number 1 to not prime

    const output = [2]

    for (let i = 3; i < limit && output.length<n; i+=2) {
      if (sieve[i]) {
        output.push(i)
        for (let j = i * i; j < limit; j += i) {
          sieve[j] = 0
        }
      }
    }

    return output
  }
}