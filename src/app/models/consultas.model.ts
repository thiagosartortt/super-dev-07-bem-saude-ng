export interface ConsultasResponseModel{
  paciente: string;
  profissional: string;
  status: ConsultaStatus;
  data: string; // ISO: YYYY-MM-DD
  horarioPrevisto: string; // HH:mm
}

export type ConsultaStatus =
  | 'Agendada'
  | 'Atrasada'
  | 'Confirmada'
  | 'Cancelada'
  | 'Em Andamento'
  | 'Finalizada';

