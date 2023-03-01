import './Producto.css';
import FechaProducto from './FechaProducto';

function Producto(props) {

    const nombre = props.producto_que_pongo.nombre;
    const fecha = props.producto_que_pongo.fecha;
    const precio = props.producto_que_pongo.precio;
    const ano = fecha.getFullYear();
    const mes = fecha.toLocaleString('es-Es', { month: 'long' });
    const dia = fecha.toLocaleString('es-ES', { day: '2-digit' });
    return (
        <div className='producto'>
            <FechaProducto fecha={props.producto_que_pongo.fecha} />
            <div className='producto_descripcion'>
                <h5>{nombre}</h5>
                <p>{precio}</p>
            </div>

        </div>

    )
}
// Solo queda poner bonitos los div de los productos
export default Producto;