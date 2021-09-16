import { useState, useEffect } from "react"
import { getFetch } from "../Utils/Mock"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList/ItemList"


export function ItemListContainer ({greeting}) {
   const [personas, setPersonas] =useState ([])
   const [loading, setLoading] =useState(true)

    const onAdd = (cant) => {
        console.log (cant)
    }

    useEffect (() => {
        getFetch
        .then(respuesta =>{
            setPersonas(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))

    },[])

    return (
        <div>
           <p>{greeting}</p> 
        {loading ? <h3>Cargando...</h3> :<ItemList/>} 


           <ItemCount stock={10} initial ={1} onAdd={onAdd} />
        </div>
    )
}



