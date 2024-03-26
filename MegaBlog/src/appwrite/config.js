import { Service } from 'appwrite/types/service.js';
import conf from '../conf.js'
import { client,ID,Databases,Storage,Query, Client}  from "appwrite";

export  class service{
    client = new Client();
    Databases;
    bucket;
}

const service = new Service()
export default service