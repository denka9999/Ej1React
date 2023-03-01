import Producto from './Producto';

function Productos( props ){
    console.log(props);
    return (
        <div>
        <Producto producto_que_pongo={props.productos[0]} />
        <Producto producto_que_pongo={props.productos[1]} />
        <Producto producto_que_pongo={props.productos[2]} />

        <p>hola, cuidado con los props, props."nombre del json que le paso" aso tiene que ser</p>
        </div>
     

    )
}
export default Productos; 