import {useState, useEffect} from 'react'
import {getFetchUno} from '../../Utils/Mock';
import ItemDetail from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    const [item,setItem] = useState ({})

    useEffect(() => {
       getFetchUno 
        .then(resp => setItem(resp))
    }, [])

    return (
        <>
           <ItemDetail item={item} />
        </>
    )
}

export default ItemDetailContainer
