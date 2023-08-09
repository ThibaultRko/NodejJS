const events = require('events');

const game = new events.EventEmitter();
let level = 0;

function displayMenu () {
    return console.log('1 - Monter de niveau \n2 - Terminer le jeu');
}

game.on('level_up', () => {
    level++;
    console.log(`Bravo, vous êtes niveaux ${level} :)`);
    displayMenu();
});

game.on('game_finished', (final_level) => {
    console.log(final_level);
    console.log('Vous avez terminé le jeu, quel champion !');
    process.exit()
});

displayMenu();
process.stdin.on('data', (data) => {
    const inputAsNumber = parseInt(data);

    if (inputAsNumber === 1) {
        // déclenche un événement
        game.emit('level_up');
    }

    if (inputAsNumber === 2) {
        // déclenche un événement et on passe un argument
        game.emit('game_finished', level);
    }

    if (inputAsNumber !== 2 && inputAsNumber !== 1) {
        console.log('Utilisez une option valide.');
    }
})