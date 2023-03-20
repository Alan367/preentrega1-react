import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"

const ItemListContainer =()=>{
    const [items, setitems]= useState ([]);
    const {id} = useParams();

   /* useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection (db, "items");

        ArrayProductos.forEach (item =>{
            addDoc(itemsCollection, item)
            
        })
        console.log("se agregaron los productos")
    
    }, []);*/


    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filter).then(elements => {
            setitems(elements.docs.map(element => ({id:element.id, ...element.data()})));
        });
    }, [id]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;