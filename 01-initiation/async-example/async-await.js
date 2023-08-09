function sleep(ms) {
   return new Promise((resolve, reject) => setTimeout(resolve, ms)); 
}

async function myAsyncSumFunction(nombre1, nombre2) {
    await sleep(1500);
    const result = nombre1 + nombre2;
    if (result < 0) {
        throw 'Le résultat ne peut pas être négatif.';
    }
    return result;
}

async function main() {
    const result = await myAsyncSumFunction(2, 4);
    console.log(result);
    
    //gérer l'erreur
    try {
        await myAsyncSumFunction(2, -4);
    } catch(e) {
        console.error(e)
    }

    // une function async est toujours une promesse
    await myAsyncSumFunction(-4, 2).catch(error => {
        console.error(error);
    })
}

main();