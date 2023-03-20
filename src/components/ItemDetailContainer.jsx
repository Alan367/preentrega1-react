import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = ()=>{
    const [item, setitem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const document = doc(db, "items", id);
        getDoc(document).then(element => {
            setitem({id:element.id, ...element.data()});
        });
    }, [id]);

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;

