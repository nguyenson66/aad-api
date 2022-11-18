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
import { CustomerModule } from './modules/customers/customers.module';
import { CommentModule } from './modules/comments/comments.module';
import { AddressModule } from './modules/addresses/addresses.module';
import { FullNameModule } from './modules/full-names/full-names.module';
import { ItemModule } from './modules/items/items.module';
import { CartModule } from './modules/carts/carts.module';
import { OrderModule } from './modules/orders/orders.module';
import { ShipmentModule } from './modules/shipments/shipments.module';
import { CardModule } from './modules/cards/cards.module';
import { CashModule } from './modules/cash/cash.module';

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
    CustomerModule,
    CommentModule,
    AddressModule,
    FullNameModule,
    ItemModule,
    CartModule,
    OrderModule,
    ShipmentModule,
    CardModule,
    CashModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
