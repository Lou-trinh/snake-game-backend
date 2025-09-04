import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './score.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db.sqlite',
            entities: [Score],
            synchronize: true, // Tự động tạo bảng (dùng trong dev)
        }),
        TypeOrmModule.forFeature([Score]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}