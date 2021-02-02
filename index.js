function power(x,n){
  if(n === 0) return 1
  if(n === 1) return x

  if(n < 0 ){
    return Math.pow(1/x, -n) 
  }
 
  return n % 2 == 0 ?
        Math.pow(x * x, n / 2) :
        Math.pow(x * x, Math.floor(n / 2)) * x
}

power(2,19)