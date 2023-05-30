//elecciones

/*
let A = 0
    let B = 0
for(i=1 ; i<=10; i ++){
    let partido = prompt("que partido votas?");

    if (partido == "A"){
                 console.log ("puntos  PARTDIO A TU VOTO ES EL  "  + A ++)
            }
            else{
           console.log("votaste partido B TU VOTO ES EL  " + B ++)


}}

if(A > B){
       
    console.log("el ganador es el partido A")
}
else if(B > A){
    console.log("el ganador es el partido B")
}

*/

//OPERACION ARITMETICA
/*
let numero = parseInt(prompt("indique numero 1"));
let numero2 = parseInt(prompt("indique numero 2"))
let operacion = prompt("indique con el operador/ signo lo que quiere realizar + ,-,*,/ ")
if( operacion == "+"){
    console.log(numero + numero2)
}
else if(operacion == "-"){
    console.log(numero - numero2)

}
else if (operacion == "*"){
    console.log(numero * numero2)
}
else if(operacion == "/"){
    console.log(numero / numero2)
}
else (console.log("no ingresaste una operacion valida"))
*/

//alumnos

for (i = 1 ; i<=5 ; i++){

    let nombreAlumno = prompt("indique nombre del alumno")
    let notaAlumno = parseInt(prompt("indique la nota del alumno mencionado"))
    let notaAlumno2 = parseInt(prompt("indique la SEGUNDA nota del alumno mencionado"))
    let promedio = (notaAlumno + notaAlumno2) / 2


console.log(`el nombre del alumno es ${nombreAlumno} y su promedio es de ${promedio}`)

}