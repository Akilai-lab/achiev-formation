let capitalize = (string) => {
  let result = " ";
  let first = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    result = result + string[i]; 
  }
return first + result;
}
capitalize("immeubles");