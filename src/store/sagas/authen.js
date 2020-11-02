import { fork, call, put, take } from 'redux-saga/effects'
import { REQUEST_SIGN_IN, successSignIn, failureSignIn } from '@/store/actions/authen'
import authenApi from '@/api/authen'

function* signIn({ username, password }) {
  try {
    const response = yield call(() => authenApi.login(username, password))
    yield put(successSignIn(response.data))
  } catch (error) {
    yield put(failureSignIn(error))
  }
}

// Watchers

function* watchSignin() {
  while (true) {
    const { payload } = yield take(REQUEST_SIGN_IN)
    yield fork(signIn, payload)
  }
}

export default function* rootSaga() {
  yield fork(watchSignin)
}
