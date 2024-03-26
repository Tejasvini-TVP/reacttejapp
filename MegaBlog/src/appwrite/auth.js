import conf from '../conf.js'
import { client,Account,ID}  from "appwrite";

export class Authservice{
    client = new client();
    account;

    constructor() {
      this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
      this.account = new Account(this.client)  
    }

    async createAccount({email,password,name}) {
        try{

        }catch (error) {
            throw error;
        }
    }
}

const authservice = new Authservice();
export default Authservice