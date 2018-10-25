module.exports = {
	generate: (n)=>{
		// I would probably use a memoization pattern here but
		// since I would just use a file for primes I'm not
		// gonna worry about multiple calls performances

    const limit = 42949672//95 //224737*224737



    // const upperLimit = Math.sqrt(limit)
    // const output = []

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

    return MyriadSieveLinear(1000000)
	}
}




// Most performant algo from https://aaltodoc.aalto.fi/bitstream/handle/123456789/32498/master_Sipil%E4_Juhani_2018.pdf;jsessionid=D49E9709049C14EF4565BF7FF653AC25?sequence=1
/*
Linear Myriad prime sieve v1 . 1 1 9. 5. 2 0 1 8
Author : Juhani S i p i l ä
Aal to University − Systems Analysis Laboratory
*/

function G( n ) {
  // allP>5 can be e x p r e s s e d a s 6a+−1 − Bungus 1 5 9 9 , Wells 1986
  return 3*n+(n&1==1?2:1)
}

function I(n ,m) {
  return 3*n*m+n*(m&1==1?2:1) + m*( n&1==1?2:1) + ((n&1==1)&&(m&1==1) ? 1 : 0 )
}

function MyriadSieveLinear(limit) {
  //maximum index of the interval
  var Imax = Math.floor( limit / 3 )
  var lpi = Array(1+Imax).fill( 0 ) // l o w e s t prime i n d i c e s
  //interval = Array(1+ l i m i t ) ;
  var x = 1
  var y = 1
  var Icur = 8
  var yLim

  while ( Icur<=Imax ) { // h o r i z o n t a l l o o p
    // 5 ’ s m u l t i p l e s a r e always c r o s s a b l e a s i t i s the l o w e s t prime i n G !floor(5/3)=1
    lpi[Icur] = 1 // c r o s s e d o f f xth 5 ’ s m ul ti pl e ( y=1)
    y = 2 // inc remen t y ==> y=2
    yLim = ( lpi[x]!= 0 ? lpi[x]:x ) ;
    while ( y<=yLim ) { // v e r t i c a l l o o p
      if (lpi[y]!= 0) {y++; continue ; } // s ki p c omp o si te rows
      Icur = I ( x , y ) ; // c a l c u l a t e nex t c u r r e n t inde x
      if( Icur>Imax ) { break ; } // i s the inde x out o f s e a r c h sp a ce ?
      lpi[Icur] = y ; // c r o s s e d o f f I c u r and saved i t s l o w e s t prime index
      y++
    } // columns r e l e v a n t el em e n t s c r o s s e d o f f
    x++ //move h o r i z o n t a l l y
    Icur = I(x,1) ; // p r e p a r e f o r next i t e r a t i o n
  } // a l l c om p o si t e s <=G_max=G(Imax ) c r o s s e d o f f

  primes = [ ] //push primes to an array
  primes.push(2)
  primes.push(3)
  var i=1
  while ( i<Imax ) {
    if (lpi[ i ]==0){
      primes.push(G(i))
    }
    i++
  }
  g=G(i) // accoun t f o r ’ non−G’ l i m i t s
  if (g<=limit&&lpi[ i ]==0){
    primes.push( g )
  }

  return primes ;
}