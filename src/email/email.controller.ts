
import { createTransport } from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';
import BusinessException from '../exceptions/BusinessException';
import { logger } from '../logger/winston';

export default class MailController {

  private pathViews = './views/'
  private pathTemplates = path.resolve(__dirname, this.pathViews)  
  private hbsConfig = {
    viewEngine: {
      extName: '.hbs',
      defaultLayout: ''
    },
    viewPath: this.pathTemplates,
    extName: '.hbs'
  };

  private transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  public sendMailTemplate({ to, subject, template, context }: any) {
    const email = {
      from: process.env.MAIL_USER,
      to,
      subject: 'Curriculum Seguro - ' + subject,
      template,
      attachments: [{
        filename: 'shadow-logotype.png',
          path: __dirname +'/views/shadow-logotype.png',
         cid: 'shadow-logotype'
  }],
      context
    }

    this.transporter.use('compile', hbs(this.hbsConfig))
    this.transporter.sendMail(email, (err, info) => {
      if (err) {
        logger.error("email err", err)
        throw new BusinessException("não foi possível enviar o email")
      }
      return info
    })
  }
}