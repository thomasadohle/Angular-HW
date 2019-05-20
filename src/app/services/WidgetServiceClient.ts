import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://quiet-ridge-17115.herokuapp.com';
  }

  findAllWidgets = () => {
    const url = this.baseUrl + '/api/widget';
    return fetch (url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }

  findWidgetsForTopic = (topicId) => {
    const url = this.baseUrl + '/api/topic/' + topicId + '/widget';
    console.log('findWidgetsForTopic called with url ' + url);
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }

  findWidgetById = widgetId => {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return fetch(url, {
      method: 'POST',
      credentials: 'include'
    }).then(response => response.json());
  }
}
