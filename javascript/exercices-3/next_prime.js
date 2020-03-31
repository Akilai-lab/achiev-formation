let next_prime = (number) => {
for (i = number; i => number; i++){
    if(i%2 === 0 || i%3 === 0 || i%5 === 0){
      console.log(i); 
    } else {
      console.log("nombre premier")
      return i;
    }
  }
}
next_prime(20);