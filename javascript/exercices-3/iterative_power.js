let iterative_power = (number, power) =>{
	let result = " ";
	if (power < 0){
		return 0;
	}
	for (let i = 1; i <= power; i++){
		result = power * i;
	}
  return result;
};
iterative_power(4, 5);