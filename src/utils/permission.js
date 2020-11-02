import { forEach } from 'lodash'

export const hasAccess = (permissions, requestedResource, requestedActions) => {
  let result = false
  forEach(permissions, (perm) => {
    if (perm.resource === requestedResource) {
      const checkedPerm = {}
      requestedActions.forEach((action) => {
        checkedPerm[action] = perm[action] === true
      })
      result = !Object.values(checkedPerm).some((val) => val === false)
    }
  })
  return result
}
