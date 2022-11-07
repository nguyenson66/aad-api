import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppConfig } from './configs/configs.constants';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('OPH Api')
    .setDescription('The OPH API description')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', name: 'Authorization', in: 'header' })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Use global validation pipe.
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      whitelist: true,
    }), //{ forbidNonWhitelisted: true, whitelist: true }
  );

  await app.listen(AppConfig.port || process.env.PORT);
}
bootstrap();
