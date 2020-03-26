let iterative_power = (number, power) => {
  for (let i = 0; i <= power; i++){/**compteur i = 0 pour arriver au même nombre que power**/
    power = number * i ; /** à chaque boucle multiplier le compteur à number **/
  }
  if ( power < 0 ){ /**si puissance infèrieur à 0 retourner 0**/
    return 0;
  }
};
iterative_power(2, -1);/**appel de la fonction**/

/**puissance d'un nombre (power)
nombre au carré (number)
nombre multiplié par lui même autant de fois que le nombre de sa puissance (number*number)*n_de_power;
soit a4 = a*a*a*a **/
