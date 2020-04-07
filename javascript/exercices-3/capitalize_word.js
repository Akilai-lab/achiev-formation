let capitalize = (string) => {
	return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
capitalize("bulles");

let capitalize_word = (string) => {
	return string.split (" ").map(function(chaine) {
    	return capitalize(chaine);
													}).join(" ");
}
capitalize_word("la plantation de haricots");