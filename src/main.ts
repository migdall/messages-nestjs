import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
