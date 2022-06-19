import { join } from 'path';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { AppResolver } from './app.resolver';
import { QuestionsModule } from './questions/questions.module';
import { DateScalar } from './date.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    QuestionsModule
  ],
  controllers: [AppController],
  providers: [AppResolver, AppService],
})
export class AppModule { }

  //   GraphQLModule.forRoot<ApolloDriverConfig>({
  //     driver: ApolloDriver,
  //     typePaths: ['./**/*.graphql'],
  //     /*
  //      The typePaths property indicates where the GraphQLModule should look for GraphQL SDL schema definition files you'll be writing.
  //      These files will be combined in memory; this allows you to split your schemas into several files and locate them near their resolvers.
  //    */
  //     definitions: {
  //       path: join(process.cwd(), "src/graphql.ts"),
  //       outputAs: "class",
  //     },
  //   }),
  // ],