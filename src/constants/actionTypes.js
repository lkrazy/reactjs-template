const actionMap = {
  LOADING_DATA: null,
  LOGIN_SUCCESS: null,
  LOGIN_FAILED: null,
  LOGIN_IN_PROGRESS: null
}

const actionTypes = {}
Object.keys(actionMap).forEach((action) => {
  actionTypes[action] = action
})

export default actionTypes
