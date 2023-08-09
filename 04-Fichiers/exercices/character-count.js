/*
* Créez une fonction qui va compter le nombre de charactères.
* On ne doit pas compter les espaces dans le nombre de charactères.
*/

const fs = require('fs/promises');

async function getCharacterCount (path) {
    let file = await fs.readFile(path, 'utf-8');
    file = file.replaceAll(' ', '');
    return file.length; 
}

getCharacterCount('./fichier-avec-des-espaces.txt').then(count => {
    console.log(count);
}) 