import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://quiet-ridge-17115.herokuapp.com';
  }

  findAllTopics = () => {
    const url = this.baseUrl + '/api/topics';
    return fetch(url, {
      method: 'GET',
    credentials: 'include'
  }).then(response => response.json());
}

  findTopicsForLesson = (lessonId) => {
    const url = this.baseUrl + '/api/lessons/' + lessonId + '/topics';
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }

  findTopicById = topicId => {
    const url = this.baseUrl + '/api/topics/' + topicId;
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }
}
