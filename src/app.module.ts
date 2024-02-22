import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { ChatModule } from './chat/chat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SummarizeModule } from './summarize/summarize.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: '',
    //   password: '',
    //   database: 'invoiceapp',
    //   entities: [],
    //   // entities: ['dist/**/*.model.js'],
    //   synchronize: false,
    // }),
  ChatModule,
    SummarizeModule,
    AuthModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
