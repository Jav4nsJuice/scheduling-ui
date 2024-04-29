import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StudentsResponse } from '../../shared/models/response.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<StudentsResponse> {
    return this.http.get<StudentsResponse>(
      `${environment.S_API}/api/students`
    );
  }
}
