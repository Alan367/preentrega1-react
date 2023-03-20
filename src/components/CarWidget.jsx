import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContex";
import carrito from "./images/cart3.svg"



const CarWidget = ()=>{
    const {carttotal} = useContext(CartContext);
    return((carttotal() > 0) ?
        <Link to={"/Cart"} type="button" className="btn btn-danger position-relative m-4">
            <img src={carrito} alt={"carrito"}  width={30}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{carttotal()}</span>
        </Link>: ""
    )
}

export default CarWidget;