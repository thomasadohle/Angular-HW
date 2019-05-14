import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://quiet-ridge-17115.herokuapp.com';
  }

  findAllLessons = () => {
    const url = this.baseUrl + '/api/lessons';
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }

  findLessonsForModule = (moduleId) => {
    const url = this.baseUrl + '/api/modules/' + moduleId + '/lessons';
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }

  findLessonById = lessonId => {
    const url = this.baseUrl + '/api/lessons/' + lessonId;
    return fetch (url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }
}
