import { Calificacion } from './calificacion';
import { Categoria } from './categoria';
import { Ciudad } from './ciudad';
import { Comuna } from './comuna';

export class Empresa {
    id_empresa: number;
    nombre: string;
    direccion: string;
    descripcion: string;
    telefono: string;
    logo: string;
    email: string;
    comuna: Comuna;
    calificacion: Calificacion;
    ciudad: Ciudad;
    categorias: Categoria[];
}