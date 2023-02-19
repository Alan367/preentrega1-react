import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ArrayProductos from "./json/Productos.json"

const ItemDetailContainer = ()=>{
    const [item, setitem] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(ArrayProductos.find(prod => prod.index === parseInt(id)))
            }, 2000)
            
        })
        promesa.then((respuesta)=>{
            setitem(respuesta);
        })
    }, [id]);

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;

