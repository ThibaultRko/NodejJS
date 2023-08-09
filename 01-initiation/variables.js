const variableConstante = '42';
let variableModifiable = 'Ceci est un message avec une fote :c';

// On ne peut pas réassigner une valeur constante. Le code crash
// variableConstante = '43';

variableModifiable = 'Ceci est un message avec une faute :c'

console.log('constante', variableConstante);
console.log('modifiable', variableModifiable);

// Les variables global

console.log('global', global);

global.magie = 'abracadabra !';

console.log(global.magie);
// la clé magie est accessible partout !
console.log(magie);