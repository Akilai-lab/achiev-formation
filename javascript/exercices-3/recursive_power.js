let recursive_power = (number, power) => {
  if(power <= 0){
    return 0;
  } else if (power === 1){
    return number;
  } else {
    return number * recursive_power(number, power-1);
  }
}
recursive_power(3,4);