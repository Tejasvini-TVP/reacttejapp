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
           const userAccount = await this.account.create(ID.unique(),email,password,name);
           if(userAccount) {
           
            return this.login({email,password})
            // call anthor method
           } else{
            return userAccount;
           }
        }catch (error) {
            throw error;
        }
    }
    async login({email,password}) {
      try{
        return await this.account.createEmailSession(email,password);
      } catch (error) {
        throw error;
      } 
    }
    
}

const authservice = new Authservice();
export default Authservice