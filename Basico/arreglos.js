//sirve para almacenar elementos de diferentes tipos
//Efectuar operaciones eje: suma ...

// declaración o definicion de un arreglo
let tareas = []
//agregando datos
//prioridades 1 , 2 , 3
tareas.push(
    {
        nombre:"Desarrollar servicio de autenticación",
        prioridad:1,
        responsable:"Juansolo",
        subTareas:[
            { nombre:"Diseñar Estrategia" },
            { nombre:"Crear Base de datos" },
            { nombre:"Realizar pruebas unitarias" }
        ]
    },
    {
        nombre:"Desarrollar servicio de validación de permisos",
        prioridad:2,
        responsable:"Esteven",
        subTareas:[
        { nombre:"Diseñar Estrategia" },
        { nombre:"Crear servicio que valide el estado de la sessión" },
        { nombre:"Realizar pruebas unitarias" }
        ]
    },
    {
        nombre:"Desarrollar servicio que actualize el token de sessión",
        prioridad:3,
        responsable:"Camila",
        subTareas:[
        { nombre:"Diseñar Estrategia" },
        { nombre:"Crear servicio que valide si la sessión ha expirado" },
        { nombre:"Realizar pruebas unitarias" }
        ]
    })

     //iterando mi arreglo haciendo uso de map
     //calback 
     /*
      var nuevo_array = arr.map(function callback(currentValue, index, array) {
        // Elemento devuelto de nuevo_array
    }[, thisArg])
     */
    let tareasModificadas = tareas.map( (t, index, arreglo) => {
        return t.prioridad = t.prioridad * 3;
    });

    let tareasModificadas = tareas.map( function(t, index, arreglo){
        return t.prioridad = t.prioridad * 3;
    });

    console.log(tareasModificadas)