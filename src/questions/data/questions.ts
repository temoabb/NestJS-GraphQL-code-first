import { Difficulty } from "../entities/difficulty.enum";
import { Question } from "../entities/question.entity";

export const questions: Partial<Question>[] = [
  {
    id: 1,
    content: "First",
    answerNumber: 21,
    // createdAt: new Date(1655638688920),
  },
  {
    id: 2,
    content: "Second",
    answerNumber: 22,
    // createdAt: new Date(1655638688920),
    difficulty: Difficulty.EASY
  },
  {
    id: 3,
    content: "Third",
    answerNumber: 23,
    // createdAt: new Date(1655638688920)
    difficulty: null
  },
  {
    id: 4,
    content: "Fourth",
    answerNumber: 24,
    // createdAt: new Date(1655638688920)
    difficulty: Difficulty.HARD
  },
]