import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StudentsResponse, StudentCoursesResponse } from '../../shared/models/response.model';
import { Student } from 'src/app/shared/models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<StudentsResponse> {
    return this.http.get<StudentsResponse>(
      `${environment.S_API}/api/students`
    );
  }

  getAllStudentCourses(): Observable<StudentCoursesResponse> {
    return this.http.get<StudentCoursesResponse>(
        `${environment.S_API}/api/students/courses`
      );
  }

  addStudent(student: Student): Observable<any> {
    return this.http.post<any>(
      `${environment.S_API}/api/students`,
      student
    );
  }

  updateStudent(id: string, updates: Partial<Student>): Observable<any> {
    return this.http.put<any>(
      `${environment.S_API}/api/students/${id}`,
      updates
    );
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete<any>(
      `${environment.S_API}/api/students/${id}`
    );
  }
}
