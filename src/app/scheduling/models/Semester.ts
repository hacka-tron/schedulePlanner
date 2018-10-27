import { Course } from "./Course";

export interface Semester {
  id: number,
  semester: string,
  year: number;
  courses:  Course[]
}
