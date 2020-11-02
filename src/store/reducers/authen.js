import { FAILURE_SIGN_IN, REQUEST_SIGN_IN, SUCCESS_SIGN_IN } from '@/store/actions/authen'
import { AUTHEN_STATUS } from '@/constants'

const initState = {
  authenStatus: AUTHEN_STATUS.NOT_AUTHENTICATED,
  userProfile: {},
  userPermissions: [{ resource: 'users', read: true, crate: false, update: false, delete: false }]
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REQUEST_SIGN_IN:
      return {
        ...state,
        authenStatus: AUTHEN_STATUS.AUTHENTICATING
      }
    case SUCCESS_SIGN_IN:
      return {
        ...state,
        authenStatus: AUTHEN_STATUS.AUTHENTICATED
      }
    case FAILURE_SIGN_IN:
      return {
        ...state,
        authenStatus: AUTHEN_STATUS.NOT_AUTHENTICATED
      }
    default:
      return state
  }
}

export default reducer
