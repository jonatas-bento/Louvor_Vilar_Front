import { Song } from './Song';
export interface Ensaio {
  id: number;
  dataDoEnsaio: Date;
  cancoesDoEnsaio: Song[];
  numeroDeMembrosPresentes: number;
}
