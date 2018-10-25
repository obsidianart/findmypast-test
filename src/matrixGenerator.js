module.exports = {
  generate: (primes)=>{
    const matrix = new Array(primes.length+1).fill(0).map(x=>new Array(primes.length+1))
    for (let i=0; i<=primes.length; i++) {
      for (let j=0; j<=primes.length; j++) {
        if (i===0 && j===0) {
          matrix[i][j]=''
        } else if (i===0) {
          matrix[i][j] = primes[j-1]
        } else if (j===0) {
          matrix[i][j] = primes[i-1]
        } else {
          matrix[i][j] = primes[i-1]*primes[j-1]
        }
      }
    }

    return matrix
  }
}