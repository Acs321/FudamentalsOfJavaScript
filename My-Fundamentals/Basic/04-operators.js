// Operators

// Operadores Arimetico
let a = 5
let b = 10
console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a * b) //Multiplicacion
console.log(a / b) //Divicion

console.log(a % b) //Modulo (Resto de la divicion)
console.log(a ** b) //Exponente

a++ //Incremento
console.log(a)

b-- //Decremento
console.log(b)


// Operadores de asignacion
let myVariable = 2 //Asignaion
console.log(myVariable)

myVariable += 2 // Asignacion + incremento
console.log(myVariable)

myVariable -=2
myVariable *=2
myVariable /=2
myVariable %=2
myVariable **=2


//Operadores de comparacion
//Sirven para comparar variavles y dan un boolean (true y falce)

console.log(a > b) //Mayor que
console.log(a < b) //Menor que
console.log(a >= b) //Mayor igual que
console.log(a <= b) //Menor igaul que
console.log(a == 6) //Igual que (Igualdad por valor)
console.log(a == "6") //Es inteligent
console.log(a == "6")
console.log(a === 6) //Igualdad por identidad y valor)
console.log(a === 7) //Igualdad por identidad y valor)
console.log(a != 6) //Distinto valor
console.log(a !== "6") //Distinto valor
console.log(0 ==false)
console.log(1 == true)

console.log(0 == "")
console.log(undefined == null)

//Truthy values

//Todos los numeros positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacias
//El boolean true

//Falsy values (Valores falsos)

//0
//0n
//null
//undefinesd
//Nan
//El booleano falso
//Cadenas de texto vacias
 

//Operadores logicos

// and (&&)
console.log(5<10  && 15<20)
console.log(5<10  && 15>20)
console.log(5<10  && 15<20 && 40>20)

//or (||)
console.log(5<10  || 15>20)
console.log(5<10  && 15<20 || 4<20 )
console.log(!(5<10  || 15>20))



//Operadores ternarios
const isRainig = true
isRainig ? console.log("Esta lloviendo") : console.log("No esta lloviendo")