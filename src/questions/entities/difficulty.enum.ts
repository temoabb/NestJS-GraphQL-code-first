import { registerEnumType } from "@nestjs/graphql";

export enum Difficulty {
  EASY = "EASY",
  HARD = "HARD"
}

registerEnumType(Difficulty, {
  name: "difficulty"
})