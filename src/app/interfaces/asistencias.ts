export interface Asistencias {
  Asistencia: Asistencia[];
}

export interface Asistencia {
  idAsistencia: string;
  fecha: Date;
  estado: boolean;
  asignatura: string;
};
