import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AppResolver {
  @Query(returns => String)
  sayHello() {
    return "Hello! Do not worry! You are great! You deserve everything!"
  }
}