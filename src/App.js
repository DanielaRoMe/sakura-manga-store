import "./App.css";
import { useState } from 'react';

//REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home/Home";
import Mangas from "./pages/Mangas/Mangas";
import NewDiscoveries from "./pages/NewDiscoveries/NewDiscoveries";
import Novels from "./pages/Novels/Novels";
import Popular from "./pages/Popular/Popular";
import BookDetails from "./pages/BookDetails/BookDetails";
import ConfirmShippment from "./pages/ConfirmShippment/ConfirmShippment";

//COMPONENTS
import CartWidget from "./componentes/cartWidgets/cartWidgets";
import NavBar from "./componentes/navBar/navBar";
import CartModal from "./componentes/cartModal/cartModal";

//CartPrivider
import { CartProvider } from "./componentes/cartContext/cartContext";

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const handleClickOpenModal = () =>{
    setModalOpen(true);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <div>
          <NavBar>
            <CartWidget handleClickOpenModal={handleClickOpenModal}/>
          </NavBar>

          <CartModal isOpen ={modalOpen} closeModal={ () => setModalOpen(false)}/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mangas/:type" element={<Mangas />} />
            <Route path="/newDiscoveries/:year" element={<NewDiscoveries />} />
            <Route path="/novels/:type" element={<Novels />} />
            <Route path="/populares/:popular" element={<Popular />} />
            <Route path="/detail/:id" element={<BookDetails />} />
            <Route path="/confirmShippment" element ={<ConfirmShippment/>}/>
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
