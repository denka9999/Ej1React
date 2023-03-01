import './App.css';
import Producto from './Components/Producto';
import Productos from './Components/Productos';

// esto va a ser la aplicacion principal

function App() {

  const productos = [
    { // esto lo que hago es hacer un json
    nombre: 'dfdfd',
    precio: 555.5,
    fecha: new Date(2021,1,4)
  },
  { // esto lo que hago es hacer un json
    nombre: 'ajajaj',
    precio: 56.5,
    fecha: new Date(2023,6,5)
  },{ // esto lo que hago es hacer un json
    nombre: 'sisis',
    precio: 34.5,
    fecha: new Date(2023,2,6)
  }
  ]

  return (
    <div>
      <p>HOLA MUNDO</p>
      <Productos productos={productos} /> 
    </div>
  )
}
// ese div que pone producto  <Producto> realmente
// lo que hace es añadir codigo html proveniente de la
// funcion Producto
export default App;
