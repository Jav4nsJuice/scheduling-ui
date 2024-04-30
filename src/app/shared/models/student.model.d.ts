import { Course } from "./course.model";

export type Student = {
    id: string;
    firstName: string;
    lastName: string;
};

export type StudentCourse = {
    id: string;
    studentId: string;
    courseId: string;

    student: Student;
    course: Course;
}