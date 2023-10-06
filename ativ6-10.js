class Animal {
    constructor(nome, especie){
        this.nome = nome;
        this.especie = especie;
    }
}

class Cachorro extends Animal{
    constructor(nome, especie){
        super(nome, especie)

    }

    latir(){
        return 'Latido'
    }

}

class Gato extends Animal{
    constructor(nome, especie){
        super(nome, especie)
    }

    miar(){
        return 'Miado'
    }
}

var toto = new Cachorro('Totó', 'Cachorro');
console.log(toto.latir());

var miau = new Gato('Miaú','Gato');
console.log(miau.miar());