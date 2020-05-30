import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';

import * as Express from 'express';
import 'dotenv/config';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';

const server = Express();
server.get('/', (req, res) => res.send('Bienvenid@ al workshop de Nx!'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
