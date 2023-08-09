const { spawn } = require('child_process');

const ls = spawn('ls', ['-banane'], {
    shell: true,
});
// On voit que ls est un processus avec un stdin, stdout, stderr comme notre process.
// process qui contient les informations du processus de notre script en cours d'éxecution.
// console.log(ls);

//on écoute et on réagit à l'événement data du stdout de ls
//stdout ici étant les données renvoyé par le processus.
// à l'inverse de stdin qui représente les données entré par l'utilisateur
ls.stdout.on('data', (data) => {
    console.log('stdout :', data.toString());
});

ls.stderr.on('data', (data) => {
    console.log('stderr :', data.toString());
});

ls.on('close', () => {
    console.log('le ls est terminé !')
})