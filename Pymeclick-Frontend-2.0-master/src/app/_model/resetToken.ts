import { Timestamp } from 'rxjs';
import { Usuario } from './usuario';

export class ResetToken {
    id: number;
    token: string;
    user: Usuario;
    expiracion: Date;
}