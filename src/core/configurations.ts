export class Configurations {

  public APP: any;
  public FIREBASE:any;
  public EMAIL: any
  public MONGO: string;

  constructor() {
    this.APP = {name:process.env.APP_NAME || 'Defina um nome para a aplicação', logoUrl: process.env.APP_LOGO_URL};
    this.FIREBASE = {
      apiKey: process.env.FIRE_BASE_APIKEY,
      authDomain: process.env.FIRE_BASE_AUTH_DOMAIN,
      databaseURL: process.env.FIRE_BASE_DATABASE_URL,
      projectId: process.env.FIRE_BASE_PROJECT_ID,
      storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIRE_BASE_MESSAGING_SENDER_ID,
      appId: process.env.FIRE_BASE_APP_ID,
      measurementId: process.env.FIRE_BASE_MEASUREMENT_ID,
    };

    this.EMAIL = { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS };
    this.MONGO = process.env.MONGO_DB_URI || '';

  }
}