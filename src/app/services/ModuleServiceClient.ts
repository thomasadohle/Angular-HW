export class ModuleServiceClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://quiet-ridge-17115.herokuapp.com';
  }

  findAllModules = (courseId) => {
    const url = this.baseUrl + '/api/courses/' + courseId + '/modules';
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }
}
