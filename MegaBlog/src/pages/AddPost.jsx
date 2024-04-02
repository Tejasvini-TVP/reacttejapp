import React from 'react'
import  Container from '../components/container/Container'
import PostFrom from '../components/post-form/PostForm'
function AddPost() {
  return (
    <div className='py-8'>
       <Container>
        <PostFrom/>
       </Container>
    </div>
  )
}

export default AddPost
