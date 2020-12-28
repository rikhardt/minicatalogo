import { productos } from "../data/productos"

export const getProducts = (texto) => {

    if (texto === '' || texto.length <= 3) {
        return [];
    }

    let resultado = productos.find(producto => producto.id === texto);

  
    if (resultado === '' || resultado === undefined) {
        texto = texto.toLocaleLowerCase();
        resultado = productos.filter(producto => producto.marca.toLocaleLowerCase().includes(texto) || producto.descripcion.toLocaleLowerCase().includes(texto));
    }
    
    if (resultado === '' || resultado === undefined) return []
    return resultado;

}