/*
* Créez une fonction qui permet de fusionner le contenu de 2 fichiers.
* Le nom du fichier nouvellement crée sera <fichier1>+<fichier2>.
* Bonus: Faire en sorte que la fonction soit compatible avec un nombre indéfini de fichier
*/

const fs = require('fs/promises');

async function mergeFiles(...files) {
    const filesContent = await Promise.all(files.map(async (file) => {
        return fs.readFile(file);
    }));

    await fs.writeFile(files.join(''), filesContent.join('\n'));
} 


async function main() {
    await mergeFiles('fichier-bidon-2.txt', 'mon-nouveau-fichier.txt');
}

main()