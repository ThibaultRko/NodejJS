/*
* Installez "image-js"
* Faire un script qui lit une image 'cat.jpg', on va lui appliquer une rotation de 180
* degrés et dèfinir sa dimension comme 200x200
*/

const { Image } = require('image-js');

async function rotateAndResize() {
    let image = await Image.load('cat.jpg');
    let transform = image
        .rotate(180)
        .resize({ width: 200, height: 200 });
        
    return transform.save('catfaitkekouuw.jpg');
}

rotateAndResize();