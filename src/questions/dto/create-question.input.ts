import { Field, Float, InputType } from "@nestjs/graphql";

/* The arguments of the queries are special types called "input types" */

@InputType()
export class CreateQuestionInput {
  @Field()
  content: string;

  @Field({ nullable: true })
  answerString: string;

  @Field(() => Float, { nullable: true })
  answerNumber: number;
}

