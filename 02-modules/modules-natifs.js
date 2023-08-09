const util = require('util');

console.log(util.types.isDate(new Date()));
console.log(util.types.isDate('une banane'));
console.log(util.format("%s a %d ans", 'Romain', 24));

