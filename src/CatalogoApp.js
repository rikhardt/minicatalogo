import React from 'react'
import { Context } from './context/Context'
import { useForm } from './hooks/useForm';
import { AppRouter } from './routers/AppRouter'

export const CatalogoApp = () => {

    const [values, handleInputChange, ,uploadImage] = useForm({
        id: '',
        marca: '',
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: ''
    })

    return (
        <div>
            <Context.Provider value={{values, handleInputChange, uploadImage }}>
                <AppRouter />
            </Context.Provider>
        </div>
    )
}
