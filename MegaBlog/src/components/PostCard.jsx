import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'


function PostCard({$id, title, featuredImage}) {
    return (
     <Link to={`/post/${$id}`}>
        <div className='w-full bg-grey-100 rounder-xl p-4'>
            <div className='w-full justify-center mb-4'>


            </div>
        </div>
        </Link>
  )
}

export default PostCard