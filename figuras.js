
//Codigo del cuadrado
console.group("Cuadrados");


function perimetroCuadrado(lado){
    return lado * 4;
} 


function areaCuadrado (lado){
  return lado * lado;
}


console.groupEnd();

// Codigo triangulo
console.group("Triangulos");

function perimetroTriangulo (lado1, lado2, base){
    return (lado1 + lado2 + base);
}

function areaTriangulo (base, altura){
    return (base* altura) / 2 ;
}

function alturaTriangulo(base, lado1, lado2){

    let hipo=0;

    if (lado1 === lado2){

    hipo=lado1;
    

    }else if(lado1===base || lado2===base){
    
    hipo=base;

    } else {
        console.log("no es isoceles boludo");
    }

    const cateto=(base/2);
    const altura= Math.sqrt((hipo*hipo) - (cateto*cateto))

    return altura;
}

console.groupEnd();

// Codigo del circulo
console.group("Circulos");

// Diametro
function diametroCirculo (radio){
    return radio * 2;

}
// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo (radio){
    const diametro =diametroCirculo(radio);
   return diametro * PI;
}

// Area
function areaCirculo (radio){
return (radio * radio) * PI;
}

console.groupEnd();


// aqui interactuamos con el html

// CUADRADO

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area= areaCuadrado(value);
    alert(area);
}


// TRIANGULO

function calcularPerimetroTriangulo() {


    const valor1 = document.getElementById("InputTrianguloBase");
    const base= parseInt(valor1.value);
    const valor2 = document.getElementById("InputTrianguloLado1");
    const lado1= parseInt(valor2.value);
    const valor3 = document.getElementById("InputTrianguloLado2");
    const lado2= parseInt(valor3.value);

    const perimetro = perimetroTriangulo( lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const valor1 = document.getElementById("InputTrianguloBase");
    const base= parseInt(valor1.value);
    const valor2 = document.getElementById("InputTrianguloAltura");
    const altura= parseInt(valor2.value);

    const area= areaTriangulo(base, altura);
    alert(area);
}

function calcularAlturaTriangulo(){

    const valor1 = document.getElementById("InputTrianguloBase");
    const base= parseInt(valor1.value);
    const valor2 = document.getElementById("InputTrianguloLado1");
    const lado1= parseInt(valor2.value);
    const valor3 = document.getElementById("InputTrianguloLado2");
    const lado2= parseInt(valor3.value);

    const altura= alturaTriangulo(base, lado1, lado2);
    alert(altura);

}



// REDONDO
function calcularDiametro(){
  
    const input=document.getElementById("InputRedondo")
    const radio = input.value;
    
    const diametro= diametroCirculo(radio);
    alert(diametro);

}
function calcularPerimetroCirculo(){

    const input=document.getElementById("InputRedondo")
    const radio = input.value;


    const perimetro = perimetroCirculo( radio);
    alert(perimetro);

}

function calcularAreaCirculo(){
   
    const input=document.getElementById("InputRedondo")
    const radio = input.value;


    const area= areaCirculo(radio);
    alert(area);
}

