

export default class configuration {

  static mongoUrl: string = process.env.DB_URI || 'mongodb://localhost:27017/safe-CV';
  static PORT: string = process.env.PORT || '3005';



}

