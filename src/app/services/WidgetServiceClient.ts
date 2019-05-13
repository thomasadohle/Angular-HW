export class WidgetServiceClient {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://quiet-ridge-17115.herokuapp.com';
  }

  findAllWidgets = (topicId) => {
    const url = this.baseUrl + '/api/topics/'+ topicId + '/widgets';
    return fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json());
  }
}
