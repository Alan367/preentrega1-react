import Destacado from "./components/Destacado";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItenmListContainer";
import NavBar from "./components/NavBar";
import Promo from "./components/Promo";

function App() {
  return (
    <div>
    <NavBar/>
    <ItemListContainer PromoVerano="Promo verano! descuentos de hasta el 20% hasta el 1/03/23"/>
    <Destacado/>
    <Promo/>
    <Footer/>
    </div>
  );
}

export default App;
