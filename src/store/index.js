import { applyMiddleware, createStore, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from './sagas'
// import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()

const reducers = []
const requiredReducers = require.context('./reducers', true, /\.js$/)
requiredReducers.keys().forEach((fileName) => {
  const reducer = requiredReducers(fileName).default
  const reducerName = fileName.replace('.js', '').replace(/\.\//, '')
  reducers.push({ [reducerName]: reducer })
})

// const appliedMiddleware =
//   process.env.NODE_ENV === 'development'
//     ? composeWithDevTools(applyMiddleware(...middlewares))
//     : applyMiddleware(...middlewares)

const store = createStore(combineReducers(...reducers), applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export default store
