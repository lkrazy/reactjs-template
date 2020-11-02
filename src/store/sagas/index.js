import { fork } from 'redux-saga/effects'

const modules = []
const requiredReducers = require.context('./', true, /\.js$/)
requiredReducers.keys().forEach((fileName) => {
  if (!fileName.includes('index.js')) {
    const module = requiredReducers(fileName).default
    modules.push(module)
  }
})

export default function* rootSaga() {
  for (let i = 0; i < modules.length; i++) {
    yield fork(modules[i])
  }
}
