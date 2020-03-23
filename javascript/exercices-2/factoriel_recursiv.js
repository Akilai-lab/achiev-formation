let factoriel_recursiv = (nb) => {
	if ( nb === 0){
	return 1;
	} else {
	return nb * factoriel_recursiv (nb-1);
	}
};
console.log(factoriel_recursiv(5));