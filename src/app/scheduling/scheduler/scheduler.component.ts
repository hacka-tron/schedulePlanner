import { Component, OnInit } from "@angular/core";
import { Course } from "../models/Course";

import { ScheduleService } from "../../services/schedule.service";

@Component({
  selector: "app-scheduler",
  templateUrl: "./scheduler.component.html",
  styleUrls: ["./scheduler.component.css"]
})
export class SchedulerComponent implements OnInit {
  courses: Course[] = [];
  constructor(private scheduleService: ScheduleService) {}

  ngOnInit() {
    this.scheduleService.getCourses();
    this.scheduleService.getUpdatedCoursesListner().subscribe(courses => {
      this.courses = courses;
    });
  }
}
