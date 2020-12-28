import React, { useContext, useMemo, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { ProductCard } from '../products/ProductCard'
import { getProducts } from '../../../selectors/getProducts';
import { AddProduct } from '../products/AddProduct';
import { Context } from '../../../context/Context';


export const Search = ({ history }) => {

   

    const {values} = useContext(Context);
    const [renderNewProduct,setRenderNewProduct] = useState(false);

    
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [{ searchText }, handleInputChange] = useForm({
        searchText: ''
    });

    
    let ProductsFiltered = useMemo(() => getProducts(q), [q]);
    
    const [nuevoProduct, setNuevoProduct] = useState(false)
    const handleNuevoProducto = () => {
        history.push(`?q=`)
        setNuevoProduct(true);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
        setRenderNewProduct(false)
        setNuevoProduct(false)
    };

    const setSaveNewProduct = () => {
        ProductsFiltered = []
        setRenderNewProduct(true)
    }

    return (
        <div>
            <h1>Buscar</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <form>
                        <input
                            name='searchText'
                            type="text"
                            placeholder="Encuentra tu producto"
                            className="form-control"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}

                        />

                        <br />

                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                            <button
                                type="submit"
                                className="btn m-1 btn-block btn-outline-primary"
                                onClick={handleSearch}

                            >
                                Buscar...
                            </button>
                            <button
                                type="button"
                                className="btn m-1 btn-block btn-outline-primary"
                                onClick={handleNuevoProducto}

                            >
                                Nuevo Producto...
                            </button>
                        </div>                                       

                    </form>
                </div>                

                <div className="col-7">
                    <h4>Resultado</h4>

                    <br />

                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Buscar un producto
                        </div>
                    }

                    {
                        (q !== '' && ProductsFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            No hay un producto con {q}
                        </div>
                    }

                    
                    {
                        renderNewProduct 
                        ? <ProductCard
                            key={values.id}
                            {...values}
                        />                                               
                        :
                        (ProductsFiltered.id !== undefined)
                            ? <ProductCard
                                key={ProductsFiltered.id}
                                {...ProductsFiltered}
                            />
                            : ProductsFiltered.map(producto => (
                                <ProductCard
                                    key={producto.id}
                                    {...producto}
                                />
                            ))
                    }



                </div>
            </div>

            {nuevoProduct &&
                <React.Fragment>
                    <div className="row">
                        <div className="col-5" >
                            <AddProduct 
                                nuevoproduct={setSaveNewProduct} 
                                setNuevoProduct={setNuevoProduct} 
                            />
                        </div>
                    </div>
                </React.Fragment>    
            }        
        </div>
    )
}
