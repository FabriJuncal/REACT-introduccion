

// "TIPO DE FUNCIONES" PARA CREAR UN COMPONENTE

// Creamos el componente haciendo uso una FUNCIÓN de tipo "Function Declaration", 
// por lo general es una funcion con un "retur"n que retorna etiquetas.

// "PROPS" PARA EL ENVIO DE PARAMETROS A LA FUNCION DEL COMPONENTE

// Enviamos como parametros de la función, los PROPS.
// PROPS: Son parametros que enviamos medianto los atributos de una etiquetas/componentes desde el componente principal
// de la siguiente manera: <Header titulo="Tienda Virtual"/>
//                         function Header(props){ return(<h1 id="encabezado" className="encabezado">{props.titulo}</h1> )}

// Otra manera mas moderna, sería aplicar DESTRUCTURING (agregamos entre llaves directamente el nombre de la llave del objeto y la definimos de igualmanera) 
// en la funcion del componente, para tomar los parametros de una manera mas sencilla
// y nos ahorramos tener que hacer uso de la sintaxis de puntos de los objetos.
// Una herramienta muy util que nos permitirá visualisar los PROPS de cada componente, es la extención "React Developer Tools" (Disponible para chrome y fire fox)
function Header({titulo}){

    // // 1) Logica antes de retornar las etiquetas
    // const edad = 18

    // let mensaje;
    // if(edad  >= 18){
    //     mensaje = "Eres mayor de edad";
    // }else{
    //     mensaje = "Eres menor de edad";
    // }

    // // Para imprimir variables JS dentro del return, utilizar corchetes "{}"
    // return( <h1>{mensaje}</h1> )

// --------------------------------------------------------------------------------------------------------------
    
    // 2) Asignar Clases e ID's a las etiquetas dentro del "return"
    // Clases: Para asignar clases a etiquetas dentro del "return", deberán ir con el nombre "className",
    //         por que "class" es una palabra reservada de JavaScript.
    // ID's: Se asignan de manera igual a como se hace en HTML.

    // return( <h1 id="encabezado" className="encabezado">Tienda Virtual</h1> )

// --------------------------------------------------------------------------------------------------------------
    
    // 3) Creamos una plantilla html dinamica gracias a los PROPS,
    // para utilizarlos utilizamos la sintaxis de JS para agregar el valor a la etiqueta de la siguient manera:

    // return(<h1 id="encabezado" className="encabezado">{props.titulo}</h1>)    

    // Otra manera mas moderna, sería aplicar DESTRUCTURING (agregamos entre llaves directamente el nombre de la llave del objeto y la definimos de igualmanera) 
    // en la funcion del componente, para tomar los parametros de una manera mas sencilla
    // y nos ahorramos tener que hacer uso de la sintaxis de puntos de los objetos.
    return( <h1 id="encabezado" className="encabezado">{titulo}</h1> )
}

// Una vez creado el componente lo exportamos con la siguiente sintaxis
export default Header;