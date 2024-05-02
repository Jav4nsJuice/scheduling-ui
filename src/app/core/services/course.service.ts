import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CoursesResponse, StudentCourseResponse } from 'src/app/shared/models/response.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<CoursesResponse> {
    return this.http.get<CoursesResponse>(
      `${environment.S_API}/api/courses`
    );
  }

  addStudentToCourse(
    studentId: string,
    courseId: string
  ): Observable<StudentCourseResponse> {
    return this.http.post<StudentCourseResponse>(
      `${environment.S_API}/api/students/${studentId}/courses/${courseId}`,
      {}
    )
  }
}
