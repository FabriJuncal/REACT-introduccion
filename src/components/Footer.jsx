

// Creamos el componente haciendo uso de una función de tipo "Function Expression", 
// La diferencia entre crear un componente con "Function Declaration" y "Function Expression",
// es que con "Function Expression" si no requerimos de logica antes del "return", tan solo podemos
// eliminar los corchetes "{}" y el "return", quedando de la siguiente forma.
// Cosa que con "Function Declaration" no podriamos hacer esto por cuestiones de sintaxis.
const Footer = () =>  ( 
        <footer>
            <p>Todos los derechos reservados &copy;</p>
        </footer> 
);

 
export default Footer;