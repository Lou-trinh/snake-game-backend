import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './score.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite', // Tên file database
      entities: [Score], // Khai báo entity
      synchronize: true, // Tự động tạo bảng, chỉ dùng trong môi trường phát triển
    }),
    TypeOrmModule.forFeature([Score]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
