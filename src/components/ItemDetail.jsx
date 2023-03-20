import { useContext } from "react";
import { CartContext } from "./context/CartContex";
import ItemCount from "./ItemCount";

const ItemDetail = ({item})=>{
    const {additem} = useContext(CartContext);

    const onadd2 = (cantidad) =>{
        additem(item, cantidad);
    }

    return(
        <div className="container d-flex">
            <div className="row">
                <div className="col">
                    <img src={item.imagen} alt={item.nombre}  width={180}/>
                </div>   
                    <div className="col">
                    <h1>{item.nombre}</h1>
                    <h5>{item.calorias} Kcal</h5>
                    <p>{item.descripcion}</p>
                    </div>
                    </div>
                    <div className="row">
                        <ItemCount stock={item.stock} onadd2={onadd2}/>
                    </div>
        </div>
    )
}

export default ItemDetail;