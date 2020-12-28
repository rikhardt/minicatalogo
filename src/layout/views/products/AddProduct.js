import React, { useContext } from 'react'
import { Context } from '../../../context/Context'

export const AddProduct = (props) => {

    const {values, handleInputChange, uploadImage} = useContext(Context)
  
    const { id, marca, nombre, descripcion, precio } = values

    const handleFileChange = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        if (file) {
           uploadImage(file)
        }
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleSave = (e) => {
        e.preventDefault();
        props.nuevoproduct()
        props.setNuevoProduct(false)
    }


    return (
        <div>
            <form>
                <div className="mb-3">
                    <input
                        name='id'
                        type="text"
                        placeholder="id"
                        className="form-control"
                        autoComplete="off"
                        required
                        value={id}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        name='marca'
                        type="text"
                        placeholder="Marca"
                        className="form-control"
                        autoComplete="off"
                        required
                        value={marca}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        name='nombre'
                        type="text"
                        placeholder="Nombre"
                        className="form-control"
                        autoComplete="off"
                        required
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        name='descripcion'
                        type="text"
                        placeholder="Descripción"
                        className="form-control"
                        autoComplete="off"
                        required
                        value={descripcion}
                        onChange={handleInputChange}
                    />
                </div>                
                               
                <div className="mb-3">
                    <input
                        name='precio'
                        type="text"
                        placeholder="Precio"
                        className="form-control"
                        autoComplete="off"
                        required
                        value={precio}
                        onChange={handleInputChange}

                    />
                </div>

                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleSave}
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>
                    
                    <button 
                        type="button"
                        className="btn btn-primary ms-1"
                        onClick={handlePictureClick}
                    >
                        <i className="fas fa-file-upload"></i>
                        <span> Subir imagen</span>
                    </button>
                    <input
                        id="fileSelector" 
                        name="imagen"
                        type="file"
                        style={{display:"none"}}
                        onChange={handleFileChange}
                    />  
                </div>
            </form>
        </div>
    )
}
