import { Component, OnInit } from '@angular/core';
import {TopicServiceClient} from '../../services/TopicServiceClient';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {

  constructor(private service: TopicServiceClient, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.params = params);
    this.courseId = this.params.courseId;
    this.moduleId = this.params.moduleId;
    this.lessonId = this.params.lessonId;
    this.service.findTopicsForLesson(this.lessonId).then(topics => this.topics = topics);
  }
  params: Params;
  moduleId: number;
  courseId: number;
  lessonId: number;
  topics = [];
  selectedTopic = {};

  selectTopic = topic => {
    this.selectedTopic = topic;
    this.router.navigate(['course', this.courseId, 'module', this.moduleId, 'lesson', this.lessonId, 'topic', topic.id, 'widget']);
  }

  ngOnInit() {
  }

}
