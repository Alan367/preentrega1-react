import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArrayProductos from "./json/Productos.json";
import ItemList from "./ItemList";

const ItemListContainer =()=>{
    const [items, setitems]= useState ([]);
    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(id? ArrayProductos.filter(item => item.categoria === id) : ArrayProductos)
            }, 2000)
            
        })
        promesa.then((respuesta)=>{
            setitems(respuesta);
        })
    }, [id]);


    return(
        <div className="container-fluid">
            <ItemList items ={items}/>   
            </div>
    )
}

export default ItemListContainer;