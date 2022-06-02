import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contendor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
     <Testimonio 
     nombre='Emma Bostian'
     pais='Suecia'
     imagen='emma'
     profesion='Ingeniera de Software'
     empresa='Spotify'
     testimonio='Siempre he tenido problemas para aprender Javascript.He tomado muchos cursos, pero el de freeCodeCamp fue el que se quedó. Estudiar Javascript, asi como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir trabajo de mis sueños como Ingenieria en Software en spotify '
     />

    <Testimonio
    nombre='Sarah Keys'
    pais='Estados Unidos'
    imagen='sarah'
    profesion='Ingeniera de Software'
    empresa='ChatDesk'
    testimonio='Siempre he tenido problemas para aprender Javascript.He tomado muchos cursos, pero el de freeCodeCamp fue el que se quedó. Estudiar Javascript, asi como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir trabajo de mis sueños como Ingenieria en Software en spotify '
    />
 <Testimonio
    nombre='Shawn Gomez'
    pais='Canda'
    imagen='shawn'
    profesion='Ingeniero de Software'
    empresa='Apple'
    testimonio='Siempre he tenido problemas para aprender Javascript.He tomado muchos cursos, pero el de freeCodeCamp fue el que se quedó. Estudiar Javascript, asi como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir trabajo de mis sueños como Ingenieria en Software en spotify '
    />
     </div>
    </div>
  );
}

export default App;
