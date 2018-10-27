import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { Course } from "../scheduling/models/Course";

const BACKEND_URL = environment.backendApiUrl ;

@Injectable({
  providedIn: "root"
})
export class ScheduleService {

  constructor() {}

  courses: Course[] = [{id: "cse1223", credit_hours: 3, name: "Intro To Java", description: "good class", prereqs: []}]

  getCourses(){
    return this.courses;
  }

}
