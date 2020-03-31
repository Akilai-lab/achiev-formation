let is_prime = ( number ) => {
  for (let i = 2; i < number; i++){
       if( number%i === 0){
      return false;
    } else {
      return true;
    }
  }
}
is_prime(11);
