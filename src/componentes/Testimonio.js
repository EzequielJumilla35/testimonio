import React from 'react'; 
import '../estilos/Testimonio.css'
function Testimonio(props) {
  return(
 
 <div className='contenedor-testimonio'>

  <img 
   className='imagen-testimonio'
  src={require(`../img/testimonio-${props.imagen}.png`)}
  
  alt='foto de emma'/>
  <div className='contenedor-texto-testionio'>

    <p className='nombre-testimonio'>
     <strong>{props.nombre}</strong>  en {props.pais}
      </p>

    <p className='cargo-testimonio'>
      {props.profesion} en <strong>{props.empresa}</strong> 
      </p>

    <p className='texto-testimonio'>
      {props.testimonio}
      </p>
  </div>
  
  
 </div>
  );
}

export default Testimonio;

//"Siempre he tenido problemas para aprender Javascript.He tomado muchos cursos, pero el de freeCodeCamp fue el que se quedó. Estudiar Javascript, asi como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir trabajo de mis sueños como Ingenieria en Software en spotify "