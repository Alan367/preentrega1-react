import carrito from "./images/cart3.svg"
const CarWidget = ()=>{
    return(
        <button type="button" className="btn btn-danger position-relative m-4">
            <img src={carrito} alt={"carrito"}  width={30}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">9</span>
        </button>
    )
}

export default CarWidget;