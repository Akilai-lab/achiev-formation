let recursive_power = (number, power) => {
  if (power <= 0){
    return 0;
  } else {
    return number ** power;
  }
};
console.log(recursive_power(4, 5));