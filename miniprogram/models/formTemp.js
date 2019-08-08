import { HTTP } from '../utils/http.js'

class FormTempModel {
  constructor() {
    this.http = new HTTP()
  }
  async sendFormTemp({
    title,
    type='custom',
    score,
    time_limit,
    start_time,
    end_time,
    questions
  }) {
    return await this.http.request({
      url: '/form_templates',
      data: {
        open_id: HTTP.openId,
        title: title,
        type: type,
        questions: questions
      },
      method: 'POST'
    })
  }
  async getFormTemp() {
    return await this.http.request({
      url: '/form_templates',
      data: {
        open_id: HTTP.openId
      },
      method: 'GET'
    })
  }
}

export { FormTempModel }
