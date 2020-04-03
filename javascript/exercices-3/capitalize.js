let capitalize = (string) => {
  let result ="" ;
  let first= string[0].toUpperCase ();
  for (i = 1; i < string.length; i++){
    result = result + string[i];
    console.log(result);
  }
return first + result;
}
capitalize("immeubles");