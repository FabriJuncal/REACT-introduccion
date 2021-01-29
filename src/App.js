// Importamos la libreria "Fragment" que viene con React para poder utilizar los beneficios
// de la etiqueta/componente <Fragment></Fragment>
import React, {Fragment, useState} from "react";
// Importamos los Componente
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

// Creamos variables o condicionales en este espacio
const fecha = new Date().getFullYear();

// Creamos listado de productos utilizando la función "useStates"
// Creamos un array con "destructuring" y el 1er parametro obtendra los valores del "useState" y el 2do será la función que modifique a este.
// RECORDAR: no se puede modificar los valores que contenga un "useState" sobrescribiendo los valores, se tiene que utilizar la función
//           que le pasamos como 2do parametro
const [productos, guardarProductos] = useState([
  { id: 1, nombre: 'Camisa ReactJS', precio: 50},
  { id: 2, nombre: 'Camisa VueJS', precio: 50},
  { id: 3, nombre: 'Camisa Node.js', precio: 50},
  { id: 4, nombre: 'Camisa Angular', precio: 50},
]);

// Creamos el Carrito utilizando la función "useStates"
// Creamos un array con "destructuring" y el 1er parametro obtendra los valores del "useState" y el 2do será la función que modifique a este.
// Siempre se tiene que agregar un valor para inicialisar el "useState", puede contener datos o valores de inicio como por ejemplo: "{}", "[]", '', 0, false
// RECORDAR: no se puede modificar los valores que contenga un "useState" sobrescribiendo los valores, se tiene que utilizar la función
//           que le pasamos como 2do parametro
const [carrito, agregarProducto] = useState([])

// ============================================================================================================================================

// Dentro del "return" solo se agregan las etiquetas de los componentes y sus correspondientes PROPS
  return (
    // Al utilizar la etiqueta/componente  <Fragment></Fragment>, este no crea etiquetas HTML de mas
    // Solo creara las etiquetas de los componentes que lleva dentro.
      <Fragment>
          {/* Utilizamos los componentes creado */}
          {/*Enviamos los PROPS como si asignaramos valores a un atributo de una etiqueta (por ejemplo los props "titulo" y "fecha")*/}
          <Header titulo="Tienda Virtual"/>

          <h1>Lista de Productos</h1>
          {/*.map() es la funcion que se utiliza mas en React para recorrer objetos/array, por eso lo utilizamos.
             No utiliamos los corchetes en el .map() ya que los parentecis () dan por implicito que se retornará los valores que se encuentren dentro.*/}
          {productos.map(producto => (
            <Producto 
                key={producto.id} // Enviamos un PROPS con el atributo "key", por que sino nos tira un error por consola por no enviar un elemento unico.
                producto={producto}
                productos={productos}
                carrito={carrito}
                agregarProducto={agregarProducto} // Pasamos por PROPS la función  del "useState" que modificará el carrito
            />
          ))}

          <Carrito 
              carrito={carrito}
              agregarProducto={agregarProducto} // Pasamos por PROPS la función  del "useState" que modificará el carrito
          />

          {/*A continuación se muestra un ejemplo de como envíar un valor como props utilizando una variable y sintaxis JS*/}
          <Footer fecha={fecha}/>
      </Fragment>


  );
}

export default App;
