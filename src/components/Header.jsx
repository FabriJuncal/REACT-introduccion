
// Creamos el componente haciendo uso una función de tipo "Function Declaration", 
// por lo general es una funcion con un return que retorna etiquetas.
function Header(){

    // // 1) Logica antes de retornar las etiquetas
    // const edad = 18

    // let mensaje;
    // if(edad  >= 18){
    //     mensaje = "Eres mayor de edad";
    // }else{
    //     mensaje = "Eres menor de edad";
    // }

    // // Para imprimir variables JS dentro del return, utilizar corchetes "{}"
    // return(
    //     <h1>{mensaje}</h1>
    // )

// --------------------------------------------------------------------------------------------------------------
    
    // 2) Asignar Clases e ID's a las etiquetas dentro del "return"
    // Clases: Para asignar clases a etiquetas dentro del "return", deberán ir con el nombre "className",
    //         por que "class" es una palabra reservada de JavaScript.
    // ID's: Se asignan de manera igual a como se hace en HTML.

    return(
        <h1 id="encabezado" className="encabezado">Tienda Virtual</h1>
    )
}

// Una vez creado el componente lo exportamos con la siguiente sintaxis
export default Header;