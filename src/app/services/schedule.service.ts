import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { Course } from "../scheduling/models/Course";
import { Semester } from "../scheduling/models/Semester";

const BACKEND_COURSE_URL = environment.backendApiUrl + "/courses";

@Injectable({
  providedIn: "root"
})
export class ScheduleService {
  private courses: Course[];
  private coursesUpdated = new Subject<Course[]>();

  private semesters: Semester[];
  private semestersUpdated = new Subject<Semester[]>();

  constructor(private http: HttpClient) {}

  getCourses() {
    this.http
      .get<{ message: string; courses: Course[] }>(BACKEND_COURSE_URL)
      .pipe(
        map(responseData => {
          return responseData.courses.map(course => {
            return {
              id: course.id,
              credit_hours: course.credit_hours,
              name: course.name,
              description: course.description,
              prereqs: course.prereqs
            };
          });
        })
      )
      .subscribe(transformedCourses => {
        this.courses = transformedCourses;
        this.coursesUpdated.next([...this.courses]);
      });
  }

  addCourse(insertCourse: Course) {
    this.http
      .post<{ message: string; course: Course }>(
        BACKEND_COURSE_URL,
        insertCourse
      )
      .subscribe(result => {
        console.log(result);
      });
  }

  getSemesters() {
    return this.semesters;
  }

  getUpdatedCoursesListner() {
    return this.coursesUpdated.asObservable();
  }

}
