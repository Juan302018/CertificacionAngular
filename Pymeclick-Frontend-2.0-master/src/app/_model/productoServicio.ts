import { Categoria } from './categoria';
import { Empresa } from './empresa';

export class ProductoServicio{
    id_prod_serv: number;
    nombre_prod_serv: string;
    precio: string;
    imagen: string;
    descripcion_prod_serv: string;
    categorias: Categoria[];
    empresas: Empresa[];
}