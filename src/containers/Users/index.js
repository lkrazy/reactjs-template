import React from 'react'
import AuthorizedContainer from '@/components/AuthorizedContainer'

const Users = () => {
  return (
    <AuthorizedContainer resource="users" actions={['read']}>
      <div> Users </div>
      <div> test.</div>
    </AuthorizedContainer>
  )
}

export default Users
