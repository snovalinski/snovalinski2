import ItemCount from "./ItemCount"

export function ItemListContainer ({greeting}) {
    console.log (greeting)

    const onAdd = (cant) => {
        console.log (cant)
    }

    return (
        <div>
           <p>{greeting}</p> 
           <ItemCount stock={10} initial ={1} onAdd={onAdd} />
        </div>
    )
}



