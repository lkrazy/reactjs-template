export default {
  getToken: () => {
    return localStorage.getItem('token')
  },
  setToken: (token) => {
    return localStorage.setItem('token', token)
  }
}
