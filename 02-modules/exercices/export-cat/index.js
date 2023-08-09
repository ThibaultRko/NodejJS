/*
* Dans un fichier séparé, créez 2 functions:
* - Age humain -> Age chat (9 fois l'âge humain)
* - Age chat ->  Age humain
* Appelez ces fonctions et affichez le résultat dans ce fichier-ci
*/
 
const { catAgeToHumanAge, humanAgeToCatAge } = require('./cat-age-utils');


console.log(`mon âge en chat est ${humanAgeToCatAge(24)} ans`);
console.log(`l'âge de mon chat en humain est ${catAgeToHumanAge(5)} ans`);
