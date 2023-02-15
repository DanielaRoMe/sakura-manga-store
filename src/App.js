import './App.css';

//REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Home from './pages/Home/Home';
import Mangas from './pages/Mangas/Mangas';
import NewDiscoveries from './pages/NewDiscoveries/NewDiscoveries';
import Novels from './pages/Novels/Novels';
import Popular from './pages/Popular/Popular';
import BookDetails from './pages/BookDetails/BookDetails';

//COMPONENTS
import CartWidget from './componentes/cartWidgets/cartWidgets';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import NavBar from './componentes/navBar/navBar';
//IMG LOGO
import logo from '../src/img/sakura-logo.png'


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar>
          <CartWidget title="0" />
        </NavBar>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Mangas' element={<Mangas/>}/>
          <Route path='/NewDiscoveries' element={<NewDiscoveries/>}/>
          <Route path='/Novels' element={<Novels/>}/>
          <Route path='/Popular' element={<Popular/>}/>
          <Route path='/detail/:id' element={<BookDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
