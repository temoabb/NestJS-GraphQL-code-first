import { Injectable } from "@nestjs/common";
import { DateScalar } from "src/date.scalar";
import { questions } from "./data/questions";
import { CreateQuestionInput } from "./dto/create-question.input";

import { Question } from "./entities/question.entity";

@Injectable()
export class QuestionsService {
  findAll() {
    return questions;
  }

  create(createQuestionInput: CreateQuestionInput) {
    const newId = questions.length + 1;
    const newQuestion: Question = {
      ...createQuestionInput,
      id: newId,
      // createdAt: new Date() as unknown as DateScalar
    }
    questions.push(newQuestion);
    return newQuestion;
  }
}