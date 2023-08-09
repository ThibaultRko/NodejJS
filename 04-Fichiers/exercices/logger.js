/**
 * 📌Créer un module de log permettant de créer une arborescende de dossiers comme ceci :
 * 📁logs
 *  📁2021
 *   📁03
 *    📁23
 *     📝09.log
 * 📌Créer une fonction permettant d'écrire dans le fichier log pour la journée.
 * 📌Créer une fonction permettant d'effacer les logs de la date actuelle
 */
const fs = require('fs/promises');


function getDirectoryStructureForDate(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

async function isDirectoryStructureAlreadyCreated(structure) {
    try {
        await fs.opendir(structure);
        return true;
    } catch(error) {
        return false;
    }   
}

async function generateDirectoryStructure(structure) {
    if (await isDirectoryStructureAlreadyCreated(structure)) {
       return console.log('l\'arborescence est déjà présente');
    }
    await fs.mkdir(structure, {
        recursive: true,
    })
}

exports.writeInTodayLog = async function (message) {
   const structure = getDirectoryStructureForDate(new Date());
   await generateDirectoryStructure(structure); 
   await fs.appendFile(`${structure}/log.txt`, `\n${message}`);
} 

exports.removeTodayLogs = async function () {
    const today = new Date();
    const structure = getDirectoryStructureForDate(today);
    await fs.rm(structure, {
      recursive: true,
      force: true,
    });
}

// écrire dans le log du jour
// exports.writeInTodayLog('error, paint3d n\'est pas à jour !');

// supprimer les logs du jours
// exports.removeTodayLogs();