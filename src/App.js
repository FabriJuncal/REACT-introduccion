// Importamos la libreria "Fragment" que viene con React para poder utilizar los beneficios
// de la etiqueta/componente <Fragment></Fragment>
import React, {Fragment, useState} from "react";
// Importamos el componente
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

// Creamos variables o condicionales en este espacio
const fecha = new Date().getFullYear();

// Creamos listado de productos utilizando la función "useStates"
const [productos, guardarProductos] = useState([
  { id: 1, nombre: 'Camisa ReactJS', precio: 50},
  { id: 2, nombre: 'Camisa VueJS', precio: 50},
  { id: 3, nombre: 'Camisa Node.js', precio: 50},
  { id: 4, nombre: 'Camisa Angular', precio: 50},
]);

// ============================================================================================================================================

// Dentro del "return" solo se agregan las etiquetas de los componentes y sus correspondientes PROPS
  return (
    // Al utilizar la etiqueta/componente  <Fragment></Fragment>, este no crea etiquetas HTML de mas
    // Solo creara las etiquetas de los componentes que lleva dentro.
      <Fragment>
          {/* Utilizamos los componentes creado */}
          {/*Enviamos los PROPS como si asignaramos valores a un atributo de una etiqueta (por ejemplo los props "titulo" y "fecha")*/}
          <Header titulo="Tienda Virtual"/>

          {/*A continuación se muestra un ejemplo de como envíar un valor como props utilizando una variable y sintaxis JS*/}
          <Footer fecha={fecha}/>
      </Fragment>


  );
}

export default App;
