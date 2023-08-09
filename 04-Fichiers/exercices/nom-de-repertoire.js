/*
*  Créez une fonction qui n'affiche QUE les noms de répertoires dans le dossier actuel
*/

const fs = require("fs/promises");

async function getDirNameOnlyFromDirectory(path) {
    const directory = await fs.readdir(path, {
        withFileTypes: true,
    })
    // D'abord, on filtre pour ne garder que les répertoires.
    // Ensuite,
    const directoryNameOnly = directory.filter(directoryEntity => directoryEntity.isDirectory())
                                       .map(directoryEntity => directoryEntity.name);
    return directoryNameOnly;
}

getDirNameOnlyFromDirectory('.').then(result => console.log(result));