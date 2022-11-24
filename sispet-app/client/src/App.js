import { Fragment } from 'react';
import './App.css';

//Components
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import CadastroAnimal from './components/cadastroAnimais';
import ListaAnimais from './components/listaAnimais';
import CadastroCliente from './components/cadastroClientes';
import ListaClientes from './components/listaClientes';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  let component
  switch(window.location.pathname) {
    case "/animais":
      component = [<CadastroAnimal />, <ListaAnimais />]
      break
    case "/clientes":
      component = [<CadastroCliente />, <ListaClientes />]
      break
    case "/signup":
      component = [<Signup />]
      break
    case "/login":
      component = [<Login />]
      break
  };
  return (
    <Fragment>
        <div className='row'>
          <Navbar/>
          <Sidebar/>
          { component }
          <Footer/>
        </div>
    </Fragment>
  );
};

export default App;
