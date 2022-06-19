import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CreateQuestionInput } from './dto/create-question.input';
import { Question } from './entities/question.entity';

import { QuestionsService } from './questions.service';

const pubSub = new PubSub();
const QUESTION_ADDED = 'questionAdded';

@Resolver(() => Question)
export class QuestionsResolver {
  constructor(private readonly questionsService: QuestionsService) { }

  @Query(() => [Question], { name: "questions" })
  getAll() {
    return this.questionsService.findAll();
  }

  @Mutation(() => Question)
  createQuestion(@Args('createQuestionInput') createQuestionInput: CreateQuestionInput) {
    console.log("A new question was added");
    pubSub.publish(QUESTION_ADDED, {
      questionAddeddddddddd: "A new question was added"
    })
    return this.questionsService.create(createQuestionInput);
  }

  @Subscription((returns) => String)
  questionAdded() {
    console.log("@Subscription")
    return pubSub.asyncIterator(QUESTION_ADDED)
  }
}
