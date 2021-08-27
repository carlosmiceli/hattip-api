import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser('Lakers'));

  app.use(
    session({
      secret: '12345',
      resave: false,
      saveUninitialized: false,
      cookie: {
        sameSite: 'none',
        secure: true, //change for production to true so cookie is set in https site
        httpOnly: true, // it prevents client side JS from reading the cookie
        maxAge: 1000 * 60 * 60 * 7, //session max age in milliseconds
      },
    }),
  );

  app.enableCors();

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
