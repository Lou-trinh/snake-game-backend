import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Cấu hình CORS để cho phép truy cập từ frontend
  app.enableCors({
    credentials: true,
    origin: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
