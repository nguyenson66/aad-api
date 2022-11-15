import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './common/shared/shared.module';
import { typeOrmConfig } from './configs/database/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { AuthorModule } from './modules/author/author.module';
import { BookModule } from './modules/book/book.module';
import { CategoryModule } from './modules/category/category.module';
import { ImagesModule } from './modules/images/images.module';
import { PublisherModule } from './modules/publisher/publisher.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    SharedModule,
    BookModule,
    CategoryModule,
    PublisherModule,
    AuthorModule,
    ImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
