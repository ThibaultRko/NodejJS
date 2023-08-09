const fs = require('fs/promises');

async function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
} 

async function main() {
    console.log('Créer un dossier !');
    await fs.mkdir('dossier');

    await sleep(2000);

    console.log('renommer un dossier !');
    await fs.rename('dossier', 'dossier-rename');

    await sleep(2000);
    console.log('Déplacer un dossier !');
    await fs.rename('dossier-rename', '../dossier-rename');

    await sleep(2000);

    console.log('Supprimer un dossier !');
    await fs.rmdir('../dossier-rename');
}

main();