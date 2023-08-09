const fs = require('fs/promises');

async function main() {
    const filePath = './mon-nouveau-fichier.txt';
    await fs.writeFile(filePath, 'Les golgopaths en plastique sont fantastiques !é', 'utf8');
    await fs.appendFile(filePath, '\nBanané', 'ascii');
} 

main();