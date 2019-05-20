import { Component, OnInit } from '@angular/core';
import {WidgetServiceClient} from '../../services/WidgetServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-list-component',
  templateUrl: './widget-list-component.component.html',
  styleUrls: ['./widget-list-component.component.css']
})
export class WidgetListComponentComponent implements OnInit {

  constructor(private service: WidgetServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.topicId = params.topicId);
    this.service.findWidgetsForTopic(this.topicId).then(widgets => this.widgets = widgets);
  }
  topicId: number;
  widgets: [];

  ngOnInit() {
  }

}
