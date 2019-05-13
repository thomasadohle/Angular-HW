import { Component, OnInit } from '@angular/core';
import {TopicServiceClient} from '../../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {

  constructor(private service: TopicServiceClient) { }

  lesson = {
    id: 2,
    title: 'John Lesson'
  }
  topics = [];

  ngOnInit() {
    this.service.findAllTopics(this.lesson.id).then(topics => this.topics = topics);
  }

}
