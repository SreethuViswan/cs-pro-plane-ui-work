import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";

 
export class AuthService extends APIService {
    constructor() {
      console.log('next url', API_BASE_URL
      );
      
      super(API_BASE_URL);
    }


    async authenticateUser(data: any): Promise<any> {
        return this.post("/api/authenticate/", data, { headers: {} })
          .then((response) => {
            // this.setAccessToken(response?.data?.access_token);
            // this.setRefreshToken(response?.data?.refresh_token);
            return response?.data;
          })
          .catch((error) => {
            throw error?.response?.data;
          });
      }
}