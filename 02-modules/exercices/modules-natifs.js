/**
 *  En utilisant le module 'util' de node, afficher pour chaque pays (au moins 3),
 *  Afficher : "En {{country}}, le taux de tva est de {{pourcent}}%"
 */

const util = require('util');

const tva = {
    Belgique : 21,
    France : 12, 
    Allemagne : 6
};

for (let pays in tva){
    let taux = tva[pays]
    let monTaux = util.format("En %s, le taux de TVA est de %d%", pays, taux);
    console.log(monTaux);
}