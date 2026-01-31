import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecepcionistaCriarRequestModel, RecepcionistaEditarRequestModel, RecepcionistaPesquisaResponseModel, RecepcionistaResponseModel } from '../models/recepcionista.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class RecepcionistaService {

  private htppClient = inject(HttpClient);

  getAll(): Observable<RecepcionistaResponseModel[]>{
    const url = `${environment.apiUrl}/recepcionistas`;
    return this.htppClient.get<RecepcionistaResponseModel[]>(url);
  }

  //200 => ok
  //201

  create(form: RecepcionistaCriarRequestModel): Observable<RecepcionistaResponseModel>{
    const url = `${environment.apiUrl}/recepcionistas`;
    return this.htppClient.post<RecepcionistaResponseModel>(url, form);
  }

  update(id: string, form: RecepcionistaEditarRequestModel): Observable<RecepcionistaResponseModel>{
    const url = `${environment.apiUrl}/recepcionistas/${id}`;
    return this.htppClient.put<RecepcionistaResponseModel>(url, form);
  }

  getById(id: string): Observable<RecepcionistaPesquisaResponseModel> {
    const url = `${environment.apiUrl}/recepcionistas/${id}`;
    return this.htppClient.get<RecepcionistaPesquisaResponseModel>(url);
  }

  delete(id: string): Observable<void> {
    const url = `${environment.apiUrl}/recepcionistas/${id}`;
    return this.htppClient.delete<void>(url);
  }

}
