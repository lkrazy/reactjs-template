import isArray from 'lodash/isArray'
import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'
import isString from 'lodash/isString'
import restClient from '@/plugins/axios'

export default class BaseApi {
  constructor(baseUri) {
    this.baseUri = baseUri
  }

  buildUri = (paths) => {
    let uri = this.baseUri
    if (!isNil(paths)) {
      if (isArray(paths) && !isEmpty(paths)) {
        uri = `${uri}/${paths.join('/')}`
      } else if (isString(paths)) {
        uri = `${uri}/${paths}`
      }
    }

    return uri.replace(/\/\//g, '/')
  }

  sendGet = (paths, options = {}) => {
    return restClient.get(this.buildUri(paths), options)
  }

  sendPost = (paths, body, options = {}) => {
    return restClient.post(this.buildUri(paths), body, options)
  }

  sendPut = (paths, body, options = {}) => {
    return restClient.put(this.buildUri(paths), body, options)
  }

  sendDelete = (paths, options = {}) => {
    return restClient.delete(this.buildUri(paths, options))
  }
}
