import { Course } from "./Course";

export interface Semester {
  id: number,
  name: string,
  courses:  Course[]
}
