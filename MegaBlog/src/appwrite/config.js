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
  // create post
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
}

const service = new Service()
export default service