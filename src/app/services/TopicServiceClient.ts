export class TopicServiceClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://quiet-ridge-17115.herokuapp.com';
  }

  findAllTopics = (lessonId) => {
    const url = this.baseUrl + '/api/lessons/' + lessonId + '/topics';
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }
}
