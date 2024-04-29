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