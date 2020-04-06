let capitalize_word = (string) => {
  return string.split (" ").map(function(chaine) {
    return chaine.charAt(0).toUpperCase() + chaine.slice(1).toLowerCase();
  }).join(" ");
}
capitalize_word("la plantation de haricots");