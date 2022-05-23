import { Application } from 'express';
import { AuthOperatorApi } from './auth/auth.operator.api';

import { InfoApi } from './info/info.api';
import { UserApi } from './user/user.api';



export class Routes {
  private authOperatorApi: AuthOperatorApi
  private infoApi: InfoApi;
  private userApi: UserApi;
 
  constructor() {
    this.authOperatorApi = new AuthOperatorApi();    
    this.infoApi = new InfoApi();
    this.userApi =new UserApi();
   
  }

  public routes(app: Application ): void {
    this.authOperatorApi.routes(app);   
    this.infoApi.routes(app);
    this.userApi.routes(app);
  }
}
