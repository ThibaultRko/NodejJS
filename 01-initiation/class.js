class Animal {
    nombreDePattes = 0;
    nom = "Animal quelconque";

    // dans une classe, on a pas besoin du mot clé "function" pour déclarer une fonction
    // on utilise this pour accéder aux propriétés de la classe
    toString() {
        return `Je suis un ${this.nom}, j'ai ${this.nombreDePattes} pattes`;
    }
}

const rex = new Animal();
rex.nom = "chien";
rex.nombreDePattes = 8;

class Dog extends Animal {
    nom = "chien";
    nombreDePattes = 8;

    toString() {
      return super.toString() + ' et une casquette !';
    }
}

class Fish extends Animal {
    nom = "poisson";
    nombreDeNageoires = 42;

    toString() {
      return super.toString() + ` et ${this.nombreDeNageoires} nageoires`;        
    }
}

const rexButBetter = new Dog();

console.log(rex.toString());
console.log(rexButBetter.toString());

const maurice = new Fish();
console.log(maurice.toString());

class betterFish extends Fish {
    nombreYeux = 3;
    toString() {
        return super.toString() +  ` ainsi que ${this.nombreYeux} yeux`;     
    } 
} 

const tibaut = new betterFish();

class FishButBetter extends Animal {
    nom = "poisson"
    nombreDeNageoires = 10

    toString() {
        return `Je suis un ${this.nom}, j'ai ${this.nombreDeNageoires} nageoires et j'ai 6 yeux`;
    }
}

console.log(tibaut.toString())

console.log(new FishButBetter().toString());

class Poisson extends Animal {
    nom = "Poisson :tropical_fish: ";
    nombreDents = 500;
    nombreDeNagoires = 16;
    nombreYeux = 3;
    toString(){
        return super.toString() + ` et ${this.nombreDeNagoires} nageoires ainsi que ${this.nombreYeux} Yeux 👀 ${this.nombreDents} Dents MAIM! 😁`;
    }
}
const animal4 = new Poisson();
console.log(animal4.toString());