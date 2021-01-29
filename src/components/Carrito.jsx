// Importamos las Clases CSS
import './Carrito.css';
// Importamos un Componente para reutilizarlo
import Producto from './Producto';

// Definimos el componente dando por implicito el "return" por lo tanto sacamos el "return" y las "{}", dejando solo los "()"
const Carrito = ({carrito, agregarProducto}) =>  ( 
    <div className="carrito">
        <h2>Tu Carrito de Compras</h2>

        {/* TENER ENCUENTA: dentro del "return" no se puede agregar condicionales "IF", pero si se puede utilizar los "OPERADORES TERNARIOS" */}
        {/* Se verifica si existen productos dentro del carrito o no, y segun lo que se tenga, se imprime por pantalla */}
        {carrito.length === 0 ?

            <p>No hay productos en el carrito</p>

        :
            // Recorremos el "carrito" y reutilizamos el componente "Producto" para ir mostrando los productos en el "Carrito"
            carrito.map(producto => (
                // Como podemos observar, no es obligatorio pasar todos los PROPS que tenga el componente
                <Producto 
                    key={producto.id} // Enviamos un PROPS con el atributo "key", por que sino nos tira un error por consola por no enviar un elemento unico.
                    producto={producto}
                    carrito={carrito}
                    agregarProducto={agregarProducto} // Pasamos por PROPS la función  del "useState" que modificará el carrito
                />
            ))
        }

    </div>
);

 
export default Carrito;