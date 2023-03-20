import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContex";
import trash from "./images/trash3.svg";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const {Cart, clear, removeitem, carttotal, cartsum} = useContext(CartContext);

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:{Cart}, date:date, total:cartsum()};

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        });
    }

    if (carttotal() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-danger text-center" role="alert">No se encontraron Productos en el Carrito!</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <h1 className="text-center">Productos Seleccionados</h1>
                <div className="col-md-3">
                    <form>
                        <div class="mb-3">
                            <label htmlFor="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="telefono" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" class="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-9">
                    <table className="table">
                        <tr>
                            <td className="text-end" colSpan={5}><Link className="btn btn-warning bg-warning" onClick={() => {clear()}}>Vaciar Carrito</Link></td>
                        </tr>
                        {
                            Cart.map(item => ( 
                                <tr key={item.index}>
                                    <td className="text-start" width="10%"><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                    <td className="text-start align-middle" width="40%">{item.nombre}</td>
                                    <td className="text-center align-middle" width="20%">{item.cantidad} x ${item.precio}</td>
                                    <td className="text-center align-middle" width="20%">${item.cantidad * item.precio}</td>
                                    <td className="text-end align-middle" width="10%"><button type="button" className="btn btn-warning bg-warning" onClick={() => {removeitem(item.index)}} title={"Eliminar Producto"}><img src={trash} alt={"Eliminar Producto"} width={32} /></button></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total a Pagar</td>
                            <td className="text-center"><b>${cartsum()}</b></td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-md-12">
                    {orderId ? <div class="alert alert-success text-center" role="alert"><h3>Gracias por tu Compra!</h3><p>Se generó una Orden de Compra con el ID: <b>{orderId}</b></p></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Cart;