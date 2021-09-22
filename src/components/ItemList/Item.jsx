const Item = ({producto}) => {  
    return (
        <div key={producto.id}className="card w-50 mt-5">
                <div className="card-header">
                    {producto.nombre}
                    <h3>Home Scaler</h3>
                </div>
                <div className="card-body">
                    <img src={producto.foto} alt="foto"/>
                    {producto.precio}
                    <p>80 usd</p>
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