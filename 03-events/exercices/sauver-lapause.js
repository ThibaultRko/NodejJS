/*
* La machine à café est sur le point d'exploser.
* Pour la désamorcer, il faudra entrer le mot de passe "technocite".
* Pendant 10 secondes, toutes les secondes, un événement se déclenche et le compteur se décrementera.
* Au bout des 10 secondes, l'utilisateur sera invité à rentrer le mot de passe.
* Si le mot de passe est mauvais alors la machine à café explose.
* Si le mot de passe est correcte, le café est sauvé.
*/

const events = require('events');

const bomb = new events.EventEmitter();
const bombPassword = 'technocite';

bomb.on('activated', () => {
    console.log('Boum !');
    console.log('notre pauvre machine à café à explosé');
    process.exit();
});

bomb.on('deactivated', () => {
    console.log('notre machine à café est sauvé');
    process.exit();
});

bomb.on('passwordRequest', () => {
    console.log('Rentrez le mot de passe pour désactiver la bombe !');
    process.stdin.on('data', (data) => {
        // le trim retire les \n \r et les espaces en trop
        const userInputAsString = data.toString().trim();
        if (userInputAsString === bombPassword) {
            return bomb.emit('deactivated');
        }

        return bomb.emit('activated');
    })
})

let countdownCount = 10;
bomb.on('countdown', () => {
    countdownCount--;
    console.log(`Attention, il vous reste ${countdownCount} secondes pour trouver le mot de passe.`);
});

const countdownInterval = setInterval(() => {
    bomb.emit('countdown');
    
    if (countdownCount === 0) {
        clearInterval(countdownInterval);
        bomb.emit('passwordRequest')
    }
}, 1000)