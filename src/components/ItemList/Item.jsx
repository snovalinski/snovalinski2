const Item = ({producto}) => {  
    return (
        <div key={producto.id}className="card w-50 mt-5">
                <div className="card-header">
                    {producto.nombre}
                </div>
                <div className="card-body">
                    <img src={producto.foto} />
                    {producto.origen}
                </div>
                <div className="card-footer">
                    <button className= "btn btn-outline-primary btn-block">
                        detalles
                    </button>
                </div>

        </div>
    )
}

export default Item