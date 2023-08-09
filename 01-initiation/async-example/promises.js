function myPromiseSumFunction(nombre1, nombre2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = nombre1 + nombre2;
            if (result < 0) {
                return reject('Le résultat ne peut pas être négatif.');
            }
            return resolve(result);
        }, 1000)
    })
}

// sans erreur
myPromiseSumFunction(4, 2).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
})

// une erreur
myPromiseSumFunction(-4, 2).then((result) => {
    console.log('banane');
    console.log(result);
}).catch((error) => {
    console.error(error);
})

//le chaos mais moindre

myPromiseSumFunction(4, 2).then((result) => {
    myPromiseSumFunction(result, 6).then(result => {
        //etc....
    })
}).catch((error) => {
    console.error(error);
})