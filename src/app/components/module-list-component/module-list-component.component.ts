import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {

  constructor(private service: ModuleServiceClient) { }
  course = {
    id: 2,
    title: 'John Course'
  }
  modules = [];
  module = {id: 0};
  lessons = [];
  lesson = {id: 0};
  topics = [];
  topic: {id: 0};
  widgets = [];

  selectModule = module => {
    console.log('selectModule called with ' + JSON.stringify(module));
    this.module = module;
  }

  ngOnInit() {
    this.service.findModulesForCourse(this.course.id).then(modules => this.modules = modules);
    console.log(this.modules);
  }

}
