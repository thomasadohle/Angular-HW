import { Component, OnInit } from '@angular/core';
import {TopicServiceClient} from '../../services/TopicServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {

  constructor(private service: TopicServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.lessonId = params.lessonId);
    this.service.findTopicsForLesson(this.lessonId).then(topics => this.topics = topics);
  }

  lessonId: number;
  topics = [];

  ngOnInit() {
  }

}
