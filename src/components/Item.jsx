import {Link} from "react-router-dom";

const Item = ({item})=>{

    return(

        <Link to={"/item/" + item.index}>
        <div>
            <div className="card ">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} height={250}/>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                </div>
                
            </div>    
        </div>
        </Link>
    )
}

export default Item;