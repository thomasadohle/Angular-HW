import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://quiet-ridge-17115.herokuapp.com';
  }

  findAllCourses = () => {
    const url = this.baseUrl + '/api/courses/all';
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }

  findCourseById = courseId => {
    const url = this.baseUrl + '/api/courses/' + courseId
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json())
      .then(json => json
      )
      .catch(error => console.log('error in findCourseById: ' + error))
  }
}
