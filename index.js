function power(x,n){
  let num = x;
  while(n > 1){
    let current = num * x;
    n--
    num = current
  }
  return num;
}
power(4,10)