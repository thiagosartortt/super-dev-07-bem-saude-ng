import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { ConsultasResponseModel } from '../../../models/consultas.model';
import { TagModule } from 'primeng/tag';
import { RegistroStatusTag } from "../../../core/components/registro-status-tag/registro-status-tag";
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-list',
  imports: [ButtonModule, FormsModule, SelectModule, DatePickerModule, TableModule, TagModule, RegistroStatusTag, DialogModule],
  templateUrl: './list.html',
})
export class List {

  filtrosData = [

  ];

  filtrosProfissionais = [

  ];

  filtrosStatus = [
    
  ];
  visible = false;


consultas: ConsultasResponseModel[] = [
  {
    paciente: 'Maria Silva',
    profissional: 'Dra. Ana Souza',
    status: 'Agendada',
    data: '2026-02-03',
    horarioPrevisto: '08:00'
  },
  {
    paciente: 'João Pereira',
    profissional: 'Dr. Carlos Lima',
    status: 'Confirmada',
    data: '2026-02-03',
    horarioPrevisto: '08:30'
  },
  {
    paciente: 'Fernanda Costa',
    profissional: 'Dra. Juliana Martins',
    status: 'Atrasada',
    data: '2026-02-03',
    horarioPrevisto: '09:00'
  },
  {
    paciente: 'Rafael Almeida',
    profissional: 'Dr. Bruno Rocha',
    status: 'Em Andamento',
    data: '2026-02-03',
    horarioPrevisto: '09:30'
  },
  {
    paciente: 'Camila Santos',
    profissional: 'Dra. Ana Souza',
    status: 'Finalizada',
    data: '2026-02-03',
    horarioPrevisto: '10:00'
  },
  {
    paciente: 'Diego Fernandes',
    profissional: 'Dr. Carlos Lima',
    status: 'Cancelada',
    data: '2026-02-04',
    horarioPrevisto: '08:00'
  },
  {
    paciente: 'Patrícia Oliveira',
    profissional: 'Dra. Juliana Martins',
    status: 'Agendada',
    data: '2026-02-04',
    horarioPrevisto: '08:30'
  },
  {
    paciente: 'Lucas Ribeiro',
    profissional: 'Dr. Bruno Rocha',
    status: 'Confirmada',
    data: '2026-02-04',
    horarioPrevisto: '09:00'
  },
  {
    paciente: 'Aline Barbosa',
    profissional: 'Dra. Ana Souza',
    status: 'Finalizada',
    data: '2026-02-04',
    horarioPrevisto: '09:30'
  },
  {
    paciente: 'Gustavo Nunes',
    profissional: 'Dr. Carlos Lima',
    status: 'Em Andamento',
    data: '2026-02-05',
    horarioPrevisto: '10:00'
  },
  {
    paciente: 'Bruna Carvalho',
    profissional: 'Dra. Juliana Martins',
    status: 'Atrasada',
    data: '2026-02-05',
    horarioPrevisto: '10:30'
  },
  {
    paciente: 'Eduardo Souza',
    profissional: 'Dr. Bruno Rocha',
    status: 'Agendada',
    data: '2026-02-06',
    horarioPrevisto: '08:00'
  }
];

showDialog(){
  this.visible = true;
}
}