import { useState } from 'react'
import logoReact from './assets/react-logo-contenedor.png'
import './styles/app.css'
import Boton from './components/Boton'
import Contador from './components/Contador'

function App() {
  const [numclics, setNumclics] = useState(0);

  const manejarClic = ()=>{
         setNumclics(numclics + 1);
  };

  const reiniciarContador = ()=>{
    setNumclics(0);
  };

  return (
    <div className='App'>
      <div className='react-logo-contenedor'>
        <img 
         className='react-logo'
         src={logoReact}
         alt='Logo de react'/>
      </div>
      <div className='contenedor-contador'>
        <Contador  numclics ={numclics}/>
        <Boton
          texto='Clic'
          esBotonDeClick = {true} 
          manejarClick={manejarClic} 
        />

        <Boton 
          texto='Reiniciar'
          esBotonDeClick = {false} 
          manejarClick={reiniciarContador}
         />

      </div>
    </div>
         
  )
  
}

export default App
