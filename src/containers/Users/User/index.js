import React from 'react'
import AuthorizedContainer from '@/components/AuthorizedContainer'

const User = () => {
  return (
    <AuthorizedContainer resource="users" actions={['create']}>
      <div> Create user </div>
      <div> name:</div>
    </AuthorizedContainer>
  )
}

export default User
