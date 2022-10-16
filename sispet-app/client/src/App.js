import react, { Fragment } from 'react';
import './App.css';

//Components
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import CadastroAnimal from './components/cadastroAnimais';
import ListaAnimais from './components/listaAnimais';

function App() {
  return (
    <react.Fragment>
      <div className='row'>
        <Navbar/>
        <Sidebar/>
        <CadastroAnimal/><ListaAnimais/>
        <Footer/>
      </div>
    </react.Fragment>
  );
};

export default App;
