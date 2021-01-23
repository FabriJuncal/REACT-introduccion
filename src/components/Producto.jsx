
// Utilizamos sintaxis llamada "Destructuring" para obtener el producto del PROPS y
// no tener que utilizar la sintaxis de puntos, por ej: props.producto.nombre
const Producto = ({producto}) => {

    // Utilizamos sintaxis llamada "Destructuring" para definir una variable con el valor del array/objeto al mismo tiempo.
    const {id, nombre, precio} = producto;

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
        </div>
     );
}
 
export default Producto;