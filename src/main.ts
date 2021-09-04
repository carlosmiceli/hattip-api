import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as connectRedis from 'connect-redis';
import { ConfigModule } from '@nestjs/config';
import cors = require('cors');

import cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cookieParser());

  ConfigModule.forRoot();

  app.set('trust proxy', 1);

  const redis = await import('redis');

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  // don't save session in memory,
  app.use(cookieParser());

  app.use(
    session({
      store: new RedisStore({
        host: 'http://localhost',
        port: 6379,
        client: redisClient,
      }),
      secret: process.env.TOKEN_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        sameSite: 'lax',
        secure: false, //change for production to true so cookie is set in https site
        httpOnly: true, // it prevents client side JS from reading the cookie
        maxAge: 1000 * 60 * 60 * 7, //session max age in milliseconds
      },
    }),
  );

  app.use(
    cors({
      origin: 'http://localhost:3000',
      methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'DELETE', 'HEAD'],
      credentials: true,
      exposedHeaders: ['set-cookie'],
    }),
  );

  await app.listen(3001);
}
bootstrap();
