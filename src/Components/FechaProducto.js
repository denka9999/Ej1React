import './FechaProducto.css';
function FechaProducto(props) {

    const fecha = props.fecha;// ya no es json, se pasa solo la fecha
    const ano = fecha.getFullYear();
    const mes = fecha.toLocaleString('es-Es', { month: 'long' });
    const dia = fecha.toLocaleString('es-ES', { day: '2-digit' });
    return (
        <div className='producto_fecha'>
            <div> {dia}</div>
            <div> {mes}</div>
            <div> {ano}</div>
        </div>
    )
}

export default FechaProducto;