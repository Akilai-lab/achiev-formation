let capitalize = (string) => {
  let first = string[0].toUpperCase()+string.slice(1).toLowerCase();
  return first;
}
capitalize("bulles");