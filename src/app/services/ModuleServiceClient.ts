import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://quiet-ridge-17115.herokuapp.com';
  }

  findAllModules = () => {
    const url = this.baseUrl + '/api/modules';
    return fetch (url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }

  findModulesForCourse = (courseId) => {
    const url = this.baseUrl + '/api/courses/' + courseId + '/modules';
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }

  findModuleById = (moduleId) => {
    const url = this.baseUrl + '/api/modules/' + moduleId;
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }
}
