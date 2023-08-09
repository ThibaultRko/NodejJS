const tropBien = require('./monSuperModule');
// le require s'attend à recevoir un chemin comme 
// on ne va pas chercher un 
// module mais un fichier de notre projet
const fruit = require('./manyExport');
const { pomme } = require('./manyExport');

tropBien();
fruit.banane();
pomme();