
import CarWidget from "./CarWidget";
import logo from "./images/logo-pizzeria.ico"
const NavBar = ()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col reset-padding reset-margin">
                    <nav className="navbar navbar-expand-lg bg-white">
                        <div className="container-fluid">
                            <a className="navbar-brand" href={"/"}><img src={logo} alt="logo" width={70}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={"/"}>Inicio</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href={"/"}>Pizzas</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href={"/"}>Empanadas</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href={"/"}>bebidas</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end reset-padding">
                            <CarWidget/>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;