/*
*   "Faire un juste prix"
*   - Déterminer un nombre aléatoire entre 1 et 1000 (Math.random())
*   - Le joueur aura le droit a 10 essais
*   - si le joueur trouve, on écrit "bip bip" et on quitte le programme (process.exit)
*   - si le joueur perd, on écrit un message et on quitte le programme
*/
function randomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.ceil(Math.random() * (max - min) + min);
}

const justPrice = Math.ceil(Math.random() * 1000);
let tryCount = 0;
const MAXIMUM_TRY_COUNT = 10;

process.stdin.on('data', (data) => {
    const userInput = parseInt(data);

    if (Number.isNaN(userInput)) {
        console.log('La valeur entrée est incorrecte.');
    }

    if (userInput > justPrice) {
        console.log('Plus bas chef !');
    }

    if (userInput < justPrice) {
        console.log('Plus haut chef !');
    }

    if (userInput === justPrice) {
        console.log('Bip Bip, tu as gagné :)');
        process.exit();
    }

    checkTryCount();
});

function checkTryCount() {
    tryCount++;

    if (tryCount >= MAXIMUM_TRY_COUNT) {
        console.log('un message');
        process.exit();
    }
}