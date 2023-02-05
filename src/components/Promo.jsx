import pizza from "./images/pizza.png"

const Promo = ()=>{
    return(
        <div className="container-fluid">
            <div className="container my-3"> 
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={pizza} alt={"pizza"} width={80} />
                        </div>
                        <div className="col-md-2">
                            <h3>Descarga nuestra aplicacion</h3>
                        </div>
                    </div>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <button className="btn btn-danger">descargar ahora</button>
                </div>
            </div>
            </div> 
        </div>
    )
}

export default Promo;