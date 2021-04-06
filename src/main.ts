import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Ingaia Base Price API')
    .setVersion('1.0')
    .setDescription('Api1 - Preço do metro quadrado')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  const port = process.env.PORT || 3000;
  console.log(`Running on port ${port}`);
  app.enableCors();
  await app.listen(port);
}
bootstrap();
