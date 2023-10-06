class FiguraGeometrica{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }


}

class Retangulo extends FiguraGeometrica{
    constructor(base, altura){
        super(base, altura);
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

class Circulo extends FiguraGeometrica{
    constructor(base, altura, pi, raio){
        super(base, altura);
        this.pi = pi;
        this.raio = raio;

    }
    
    calcularArea(){
        return this.pi * (this.raio ** 2);
    }
}

var retangulo = new Retangulo(10, 20);
console.log(retangulo.calcularArea());

var circulo = new Circulo(0, 0, 3.14, 5);
console.log(circulo.calcularArea());