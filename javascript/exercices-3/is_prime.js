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
is_prime(45);