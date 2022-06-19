import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
// import { DateScalar } from 'src/date.scalar';
import { Difficulty } from './difficulty.enum';
/* With @ObjectType We tell NestJS that it is a type that must be generated in the schema.gql */

@ObjectType()
export class Question {
  /* @Field decorator specifies that a field must be included in the type */

  @Field(() => Int, { description: "id of the question" })
  id: number;

  @Field()
  content: string;

  @Field({ nullable: true }) // With nullable we specify if the field is optional or not
  answerString: string;

  @Field(() => Float, { nullable: true })
  answerNumber: number;

  // @Field()
  // createdAt: DateScalar;

  @Field({ nullable: true })
  difficulty?: Difficulty
}
