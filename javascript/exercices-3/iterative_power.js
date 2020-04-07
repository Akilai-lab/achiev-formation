let iterative_power = (number, power) => {
	let result = 1;
	if (power < 0) {
		return 0;
  	} else { 
		for (let i = 1 ; i <= power; i++) {
			result = result * number;
		}
		return result;
	}
}
iterative_power(-2, -2);