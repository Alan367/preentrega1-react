import ItemCount from "./ItemCount";
const ItemDetail = ({item})=>{

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
                        <ItemCount stock={item.stock}/> 
                    </div>
        </div>
    )
}

export default ItemDetail;