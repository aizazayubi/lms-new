import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, // the port you set in postgresql.conf
      username: 'postgres', // your DB username
      password: 'admin', // your DB password
      database: 'lms_db',
      entities: [User],
      synchronize: true, // auto-creates tables in dev
    }),
    UsersModule,
  ],
})
export class AppModule {}
