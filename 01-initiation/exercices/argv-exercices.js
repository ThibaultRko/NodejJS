/*
* - Faire un additionneur qui va additionner tous les chiffres qu'on passe en argument.
* - Indice: parseInt() qui permet de transformer les chaînes de charactères en nombre.
*/

let result = 0;

for (let argumentIndex = 2; argumentIndex < process.argv.length; argumentIndex++) {
    const possibleNumber = parseInt(process.argv[argumentIndex]);
    if (!Number.isNaN(possibleNumber)) {
        result += possibleNumber;   
    }
}

console.log(result);