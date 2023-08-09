function myCallBackSumFunction(nombre1, nombre2, callback) {
    setTimeout(() => {
        const result = nombre1 + nombre2;
        if (result < 0) {
            return callback('Le résultat d\'une addition ne peut pas être négatif.');
        }
        callback(null, result); 
    }, 1000)
}

myCallBackSumFunction(4, 2, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Le résultat de mon addition est : ${result}`);
})

myCallBackSumFunction(-4, 2, (err, result) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Le résultat de mon addition est : ${result}`);
})

// Le chaos


myCallBackSumFunction(4, 2, (err, result) => {
    if (err) {
      return console.error(err);
    } else {
      myCallBackSumFunction(result, 42, (err, result) => {
        if (err) {
            // le cas de l'ERREUR
        }
        myCallBackSumFunction(result, 24, (err, result) => result );
      })
      console.log(`Le résultat de mon addition est : ${result}`);
    }
})