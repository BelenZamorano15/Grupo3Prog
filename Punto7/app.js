//Realizado por: Tamara Leguizamon

let nume1 = (Number(prompt("Primer numero")));
let nume2 = (Number(prompt("Segundo numero")));
let nume3 = (Number(prompt("Tercer numero")));
if ( nume1 > (nume2 && nume3)){
    alert ("Primer numero es mayor a segundo numero y tercer numero");
} else if ( nume2 > (nume1 && nume3)){
    alert("Segundo numero es mayor a primer numero y tercer numero");
} else if (nume3 > (nume1 && nume2 )){
    alert("Tercer numero es mayor a primer numero y segundo numero");
} else{
    alert("Los tres numeros son iguales");
}