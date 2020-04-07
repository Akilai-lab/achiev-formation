let sqrt = (number) => {
	let result = 0;
	for (let i = 1; i <= number; i++) {
		result = number / i;
		if(result * result === number) {
			return result;
		}
	}
}
sqrt(49);