// Realizado por: Barilaro Miguel

let numero1 = (Number(prompt("Ingrese un número")));

let numero2 = (Number(prompt("Ingrese otro número")));

if (numero1 > numero2) {
    alert("El número mayor es el primer número ingresado: " + numero1);
} else if (numero2 > numero1) {
    alert("El número mayor es el segundo número ingresado: " + numero2);
} else {
    alert("Los números son iguales");
} 