import { Course } from './course.model';
import { Student, StudentCourse } from './student.model';

type StudentsResponse = {
    status: string;
    data: Student[];
};

type StudentCoursesResponse = {
  status: string;
  data: StudentCourse[];
};

type StudentCourseResponse = {
  status: string;
  data: StudentCourse[];
};

type CoursesResponse = {
  status: string;
  data: Course[];
};