let iterative_power = (number, power) => {
  for (let i = 0; i <= power; i++){
    power = number * i ;
  }
  if ( power < 0 ){
    return 0;
  }
};
iterative_power(2, -1);