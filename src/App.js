import './App.css';
import CartWidget from './componentes/cartWidgets/cartWidgets';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import NavBar from './componentes/navBar/navBar';
import logo from '../src/img/sakura-logo.png'

function App() {
  return (
    <div>
        <NavBar>
          <CartWidget title="0"/>
        </NavBar>
        
        <ItemListContainer logo={logo}>
          <h1>Bienvenidos a Sakura Manga Store</h1>
          <h2> Proximamente Web Completa </h2>
        </ItemListContainer>

    </div>
  );
};

export default App;
