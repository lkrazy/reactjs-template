import BaseApi from '@/api/base'

class AuthenApi extends BaseApi {
  constructor() {
    super('')
  }

  login(username, password) {
    return this.sendPost(['/login'], { username, password })
  }

  getProfile() {
    return this.sendGet(['/me'])
  }
}

export default new AuthenApi()
