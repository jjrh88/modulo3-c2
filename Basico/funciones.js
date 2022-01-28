
function holaMundo()/*parametros*/{
  //bloque de codigo o sentancias, subrutina
  console.log("Hola Mundo")
}

//invocación de mi funcion
//holaMundo()
function saludar(nombrePersona){
    console.log("Hola como estas "+ nombrePersona)
}
//invocación de mi funcion
//saludar("Javier")

/*Crear una funcion que valide la persona puede ingrear a una discote 18 años*/
function ingresoDiscote(edad){
 //realizar condición
 //usando el ciclo if(si) y el ciclo else(sino)
 if(edad >= 18)
   console.log("Puede ingresar")
 else
   console.log("Regrese cuando tenga 18 años, llamas a varios canales")
}

//invocacion
//ingresoDiscote(18)
//ingresoDiscote(18)

//funcion con retorno
function retornarFalso(){
    return false; //retorna un boolean
}

function retornarVerdadero(){
    return true;
}

//console.log(retornarFalso())
//console.log(retornarVerdadero())

function retornarCadena(){
    return "Hola";
}
let retorno = retornarCadena()
//console.log(retorno)

function retornarEntero(){
    return 5;
}

//console.log(retornarEntero())

function retornarOperacionLogicaMatematica(){
    return 4*4
}

//console.log(retornarOperacionLogicaMatematica())

function retornarElementosConcatenados(nombre, numero){
    return `El curso ${nombre}${numero}  de todos...`
    //return "Hola"+" "+"son el mejor curso..."
}
//console.log(retornarElementosConcatenados("C",2))

function test1(){
  console.log("llamando primera función")
}
function test2(){
    test1()
    return test3(5*9)
}
function test3(resultado){
    console.log(`El resulado de la operación es ${resultado+1}`)
    //console.log("El resulado de la operación es "+ resultado)
}

//test2()
1. Crear una funcion que retorne la suma de dos numeros 
2. "" "" que se ejecute dentro de otra 
3. "" "" "" imprima un texto o cualquier cosa usando ``