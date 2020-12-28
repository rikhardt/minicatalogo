import React from 'react'
import { productos } from '../../../data/productos'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
            {
                productos.map(producto => (
                    <ProductCard key={producto.id}
                        {...producto}
                    />
                ))
            }
        </div>
    )
}
