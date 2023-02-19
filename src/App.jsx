
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destacado from "./components/Destacado";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItenmListContainer";
import NavBar from "./components/NavBar";
import Promo from "./components/Promo";
import Error404 from "./components/Error404";


function App() {
  return (
    <BrowserRouter>
    <div>
    <NavBar/>
    <Routes>
          <Route path={"/"} element={<Destacado />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
    </Routes>
    <Promo/>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
