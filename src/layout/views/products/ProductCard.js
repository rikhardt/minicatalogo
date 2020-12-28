import React from 'react'

export const ProductCard = ({
    id,
    marca,
    imagen,
    nombre,
    descripcion,
    precio
}) => {
    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        {
                            (imagen !== '')
                            ?  <img src={imagen} className="card-img-top" alt={nombre} />
                            :  <img src={`./assets/productos/${id}.jpg`} className="card-img-top" alt={nombre} />
                        }
                       
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">{marca}</p>
                            <p className="card-text">
                                <small className="text-muted">{descripcion}</small>
                            </p>
                            <p className="card-text">{precio}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
