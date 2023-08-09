process.stdin.on('data', (data) => {
    console.log(`Vous avez écris : "${data}"`);
});