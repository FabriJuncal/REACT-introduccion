// Importamos la libreria "Fragment" que viene con React para poder utilizar los beneficios
// de la etiqueta/componente <Fragment></Fragment>
import React, {Fragment} from "react";
// Importamos el componente
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

// Cremos variables o condicionales en este espacio

const fecha = new Date().getFullYear();

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
