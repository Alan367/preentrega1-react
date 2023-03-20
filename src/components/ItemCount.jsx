import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onadd2})=>{
    const[items, setItems]= useState(1);
    const[ItemStock, setItemStock]= useState(stock);
    const [itemadd, setitemadd] = useState(false);

    const incrementarStock = ()=>{
        if(items<ItemStock){
            setItems(items + 1)
        }    
    }
    const decrementarStock = ()=>{
        if(items>1){
        setItems(items - 1)   
        }
        
    }

    const onnAdd = ()=>{
        if(ItemStock >= items){
            setItemStock(ItemStock - items)
            console.log("agregaste: " + items + " productos al carrito")
            setitemadd(true)
            onadd2(items)
        }
        
    }

    useEffect(()=>{
        setItemStock(stock);
    },[stock]);

    return(
        <div className="container d-flex flex-column align-items-center">
            <div className="row">
                <div className="col my-1">
                <div className="btn-group">
                    <button className="btn btn-warning" onClick={decrementarStock}>-</button>
                    <button className="btn btn-warning">{items}</button>
                    <button className="btn btn-warning" onClick={incrementarStock}>+</button>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col my-1">
                    {itemadd ? <Link to={"/cart"} className="btn btn-warning">Terminar mi compra</Link> :  
                    <button className="btn btn-warning" onClick={onnAdd}>agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;