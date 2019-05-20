import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseServiceClient} from '../../services/CourseServiceClient';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {

  constructor(private service: ModuleServiceClient, private router: Router,
              private courseService: CourseServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.courseId = params.courseId);
    this.courseService.findCourseById(this.courseId).then(course => this.course = course);
    this.service.findModulesForCourse(this.courseId).then(modules => this.modules = modules);
  }
  courseId: number;
  course = {courseTitle: ''};
  modules = [];
  selectedModule = {};
  lessons = [];
  lesson = {id: 0};
  topics = [];
  topic: {id: 0};
  widgets = [];

  selectModule = module => {
    console.log('selectModule called with ' + JSON.stringify(module));
    this.selectedModule = module;
    this.router.navigate(['course', this.courseId, 'module', module.id, 'lesson']);
  }

  ngOnInit() {
    /*
    const url = this.router.url;
    const urlPieces = url.split('/');
    for (let i = 0; i < urlPieces.length; i++) {
      if (urlPieces[i] === 'course') {
        this.courseId = Number(urlPieces[i + 1]);
      }
    } */
   // this.courseService.findCourseById(this.courseId).then(course => this.course = course);
    // this.service.findModulesForCourse(this.courseId).then(modules => this.modules = modules);
  }

}
