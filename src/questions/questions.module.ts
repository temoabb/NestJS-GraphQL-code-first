import { Module } from "@nestjs/common";
import { QuestionsResolver } from "./questions.resolver";
import { QuestionsService } from "./questions.service";

@Module({
  providers: [
    QuestionsResolver, QuestionsService,
  ]
})
export class QuestionsModule { }

