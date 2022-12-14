export interface Asignaturas {
  Asignaturas: Asignatura[];
}
export interface Asignatura {
  idAsignatura: string;
  nameAsignatura: string;
  urlAsignatura: string;
  asistencia: [];
}