import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({post}) {
    const {register,handleSubmit,watch,setValue,control,getvalues} = useForm ({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
            
        }
    })

    const submit = async (data) => {
        if(post) {
            const file = data.image[0] ? appwriteService.
            uploadFile(data.image[0]) : null

            if (file) {
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost = await appwriteService.uploadPost(post.$id,{
                ...data,
                featuredImage: file? file.$id : undefined
            })
                if (dbPost) {
                  navigator(`/post/${dbPost.$id}`)
                }  
        } else{

            const file = await appwriteService.uploadFile(data.image[0]);
            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteService.
                createPost({
                    ...data,
                    userId: useRouteLoaderData.$id,
                }) 
                if (dbPost) {
                    navigat(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const  slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g, '-')
            .replace(/\s/g, '-')
        return ''
    },[])
  return (
    <div>
      
    </div>
  )
}

export default PostForm
