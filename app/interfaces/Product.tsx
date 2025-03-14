export interface Product {
    _id: string;
    nombre_producto: string;
    descripcion: string;
    precio: number;
    categoria: string;
    marca: string;
    stock: number;
    imagenes: string[]; 
}
