import {Component, Input, OnInit} from '@angular/core';
import {LessonServiceClient} from '../../services/LessonServiceClient';
import {Module} from '../../models/module';


@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {

  constructor(private service: LessonServiceClient) { }


  @Input() module: Module;
  lessons = [];
  ngOnInit() {
    console.log('the module sent to lesson tabs is: ' + JSON.stringify(this.module));
    this.service.findLessonsForModule(this.module.id).then(lessons => this.lessons = lessons);
  }

}
