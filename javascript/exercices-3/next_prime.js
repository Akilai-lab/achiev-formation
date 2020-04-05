let is_prime = (number) => {
  let result = 0;
  for (let i = 2; i < number; i++) {
    result = number % i;
    if (result == 0) {
      return false;
    }
  }
  return true;
}

let next_prime = (number) => {
    for (let i = number; i >= number; i++){
      if (is_prime(i)){ 
        return i;
    	  } 
    }
}
next_prime(14);