export class LessonServiceClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://quiet-ridge-17115.herokuapp.com';
  }

  findAllLessons = (moduleId) => {
    const url = this.baseUrl + '/api/modules/' + moduleId + '/lessons';
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }
}
