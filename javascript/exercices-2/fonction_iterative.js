let factoriel = (nb) => {
  let numberRef= 1;
  for (let i=1; i<=nb; i++){
  numberRef= numberRef*i;
  console.log(numberRef);
  }
};
console.log(factoriel(5));