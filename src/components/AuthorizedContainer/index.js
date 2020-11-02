import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import { hasAccess } from '@/utils/permission'

const AuthorizedContainer = (props) => {
  const { resource, actions, userPermissions, children } = props
  return (
    <div>
      {!hasAccess(userPermissions, resource, actions) ? (
        // <Redirect to="/login" />
        <div>permission denied</div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  )
}

AuthorizedContainer.propTypes = {
  resource: propTypes.string.isRequired,
  actions: propTypes.arrayOf(propTypes.string).isRequired
}

const mapStateToProps = ({ authen }) => {
  const { userPermissions } = authen
  return {
    userPermissions
  }
}

export default connect(mapStateToProps)(AuthorizedContainer)
