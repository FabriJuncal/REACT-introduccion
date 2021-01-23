// Importamos la libreria "Fragment" que viene con React para poder utilizar los beneficios
// de la etiqueta/componente <Fragment></Fragment>
import React, {Fragment} from "react";
// Importamos el componente
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // Al utilizar la etiqueta/componente  <Fragment></Fragment>, este no crea etiquetas HTML de mas
    // Solo creara las etiquetas de los componentes que lleva dentro.
      <Fragment>
          {/* Utilizamos los componentes creado */}
          <Header />

          <Footer />
      </Fragment>


  );
}

export default App;
