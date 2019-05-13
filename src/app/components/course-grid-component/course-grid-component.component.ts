import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-course-grid-component',
  templateUrl: './course-grid-component.component.html',
  styleUrls: ['./course-grid-component.component.css']
})
export class CourseGridComponentComponent implements OnInit {



  constructor(private service: CourseServiceClient) { }
  courses = [];
  ngOnInit() {
    this.service.findAllCourses().then(courses => this.courses = courses);
  }

}
