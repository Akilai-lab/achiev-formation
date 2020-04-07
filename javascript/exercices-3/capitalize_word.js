let capitalize_word = (string) => {
    let capitalize = (string) => {
      let first = string[0].toUpperCase()+string.slice(1).toLowerCase();
      return first;
  	}
capitalize("bulles");
  return string.split (" ").map(function(chaine) {
    return capitalize(chaine);
  }	).join(" ");
}
capitalize_word("la plantation de haricots");