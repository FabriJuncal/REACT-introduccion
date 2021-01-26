
// Utilizamos sintaxis llamada "Destructuring" para obtener el producto del PROPS y
// no tener que utilizar la sintaxis de puntos, por ej: props.producto.nombre
const Producto = ({producto, carrito, agregarProducto, productos}) => {

    // Utilizamos sintaxis llamada "Destructuring" para definir una variable con el valor del array/objeto al mismo tiempo.
    const {id, nombre, precio} = producto;
    // Creamos una función que sera asignado al evento "onClick" del botón
    const seleccionarProducto = id => {
        // Filtramos el array de "Productos" con el "id" del producto seleccionado que pasamos por parametro de la función
        // .filter(): Es un "array method" parecido al .map(), ya que este tambien itera sobre el array y crea uno nuevo.
        // La diferencia de .filter() de .map(), es que .filter() filtrará los elementes del array según el parametro que le pasemos.
        const producto = productos.filter( producto => producto.id === id)[0];
        console.log(producto);
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {/* De este modo asignamos una función a un evento,
                Si no utilizaramos el "arrow function", la funcíon no esperaría el evento del componente y se ejecutaría al cargar la pagina */}
            <button
                type="button"
                onClick= { () => seleccionarProducto(id) }
            >Comprar</button>
        </div>
     );
}
 
export default Producto;