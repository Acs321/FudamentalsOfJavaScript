// Estructuras de control (Condicionales)

//if, else if, else

// if (si)
let age = 17
if (age == 37) {
    //Bloque
    console.log("La edad es 37")

}
//else if (si no, si)
else if (age < 18) {
    console.log("Es menor de edad")
}

//else (si no)
else {
    console.log(
        "La edad no es 37 ni menor de edad"
    )
}


//Operador ternario

const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

let day = 5
let dayName = ""
// switch
switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
    dayName ="No hay coincidencias"
}
console.log(dayName)