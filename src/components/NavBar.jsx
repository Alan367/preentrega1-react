
import CarWidget from "./CarWidget";
import logo from "./images/logo-pizzeria.ico"
import {Link, NavLink} from "react-router-dom"
const NavBar = ()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col reset-padding reset-margin">
                    <nav className="navbar navbar-expand-lg bg-white">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={logo} alt="logo" width={70}/></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <NavLink className="nav-link active" activeclassname={"active"} to={"/"}>Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/pizzas"}>Pizzas</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/empanadas"}>Empanadas</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/bebidas"}>bebidas</NavLink>
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