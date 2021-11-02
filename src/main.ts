import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
// 모든 것을 시작하는 장소 : main.ts
// 모듈 :한가지 역할을하는 앱
// AppModule : 모든 모듈들의 root 모듈
