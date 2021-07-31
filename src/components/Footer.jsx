import React from 'react';


// "TIPO DE FUNCIONES" PARA CREAR UN COMPONENTE

// Creamos el componente haciendo uso de una función de tipo "Function Expression", 
// La diferencia entre crear un componente con "Function Declaration" y "Function Expression",
// es que con "Function Expression" si no requerimos de logica antes del "return", tan solo podemos
// eliminar los corchetes "{}" y el "return", quedando de la siguiente forma.
// Cosa que con "Function Declaration" no podriamos hacer esto por cuestiones de sintaxis.

// "PROPS" PARA EL ENVIO DE PARAMETROS A LA FUNCION DEL COMPONENTE

// Enviamos como parametros de la función, los PROPS.
// PROPS: Son parametros que enviamos medianto los atributos de una etiquetas/componentes desde el componente principal
// de la siguiente manera: <Header titulo="Tienda Virtual"/>
//                         function Header(props){ return(<h1 id="encabezado" className="encabezado">{props.titulo}</h1> )}

// Otra manera mas moderna, sería aplicar DESTRUCTURING (agregamos entre llaves directamente el nombre de la llave del objeto y la definimos de igualmanera) 
// en la funcion del componente, para tomar los parametros de una manera mas sencilla
// y nos ahorramos tener que hacer uso de la sintaxis de puntos de los objetos.
// Una herramienta muy util que nos permitirá visualisar los PROPS de cada componente, es la extención "React Developer Tools" (Disponible para chrome y fire fox)
const Footer = ({fecha}) =>  ( 
        <footer>
            <p>Todos los derechos reservados &copy; {fecha}</p>
        </footer> 
);

 
export default Footer;