import { Service } from 'appwrite/types/service.js';
import conf from '../conf.js'
import { client,ID,Databases,Storage,Query, Client}  from "appwrite";

export  class service{
    client = new Client();
    Databases;
    bucket;
    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new this.databases(this.client)  
        this.bucket = new Storage(this.client)  
    }
  // create method
    async createPost({title,slug,content,status,userId}) {
       try{
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
               title,
               content,
               featuredImage,
               status,
               userId,
            }
            
        )
       } catch(error) {
        console.log("Appwrite service :: createPost :: error",error);
       }
    }
    // update method

    async updatePost(slug,{title,content,status})
    {
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                   title,
                   content,
                   featuredImage,
                   status,
                }   
            )
           } catch(error) {
            console.log("Appwrite service :: createPost :: error",error);
           }
        }

        //  delete method
    async deletePost(slug) 
    {
        try{
         await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
               
            )
            return true;

           } catch(error) {
            console.log("Appwrite service :: createPost :: error",error);
            return false;
           }
        }
//   single post method
        async getPost(slug) {
        try{
         await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
               
            )
           } catch(error) {
            console.log("Appwrite service :: createPost :: error",error);
            return false;
           }
        }
        // active post 

        async getPost(queries = [Query.equal("status","active")]){
            try{
                await this.databases.listDocument(
                       conf.appwriteDatabaseId,
                       conf.appwriteCollectionId,
                       queries,
                      
                   )
                  } catch(error) {
                   console.log("Appwrite service :: createPost :: error",error);
                   return false;
                  }
        }

        // file upload service

        async uploadFile(file) {
            try {
              return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
              )
            } catch (error){
                console.log("Appwrite service :: uploadfile :: error",error);
                return false
            }
        }
        // file delete service
        async uploadFile(fileId) {
            try {
              return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
              )
              return true

            } catch (error){
                console.log("Appwrite service :: uploadfile :: error",error);
                return false
            }
        }
        getFilePreview(fileId){
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        }
    }


const service = new Service()
export default service