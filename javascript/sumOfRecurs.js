let sum = (n) => {  
  if(n === 1 ){
    return 1;
  } else if (n === 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}
sum(7);