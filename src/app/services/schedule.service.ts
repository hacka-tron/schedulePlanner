import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { Course } from "../scheduling/models/Course";
import { Semester } from "../scheduling/models/Semester";

const BACKEND_URL = environment.backendApiUrl ;

@Injectable({
  providedIn: "root"
})
export class ScheduleService {

  constructor() {}

  courses: Course[] = [{id: "cse1223", credit_hours: 3, name: "Intro To Java", description: "good class", prereqs: []}]
  semesters: Semester[]= [{id:0, name:"Autumn 2018", courses: []}, {id:1, name:"Spring 2019", courses: []}, {id:2, name:"Summer 2019", courses: []}]

  getCourses(){
    return this.courses;
  }

  getSemesters(){
    return this.semesters;
  }

}
