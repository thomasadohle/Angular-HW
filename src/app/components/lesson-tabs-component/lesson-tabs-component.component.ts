import {Component, Input, OnInit} from '@angular/core';
import {LessonServiceClient} from '../../services/LessonServiceClient';
import {Module} from '../../models/module';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ModuleServiceClient} from '../../services/ModuleServiceClient';


@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {

  constructor(private service: LessonServiceClient, private route: ActivatedRoute,
              private moduleService: ModuleServiceClient, private router: Router) {
    this.route.params.subscribe(params => this.params = params);
    this.courseId = this.params.courseId;
    this.moduleId = this.params.moduleId;
    this.service.findLessonsForModule(this.moduleId).then(lessons => this.lessons = lessons);
  }

  // @Input() module: Module;
  courseId: number;
  moduleId: number;
  lessonId: number;
  params: Params;
  lessons = [];
  selectedLesson = {};
  selectLesson = lesson => {
    this.selectedLesson = lesson;
    this.router.navigate(['course', this.courseId, 'module', this.moduleId, 'lesson', lesson.id]);
  }
  ngOnInit() {
    // const url = this.router.url;
    // const urlPieces = url.split('/');
    // for (let i = 0; i < urlPieces.length; i++) {
    //   if (urlPieces[i] === 'module') {
    //     this.moduleId = Number(urlPieces[i + 1]);
    //   }
    // }
    // this.service.findLessonsForModule(this.moduleId).then(lessons => this.lessons = lessons);
  }

}
