import Item from "./Item";

const ItemList = ({productos}) => {
    return (
       <>
        {productos.map(productos=> <Item productos={producto} />
        )}
       </> 
    )
}

export default ItemList