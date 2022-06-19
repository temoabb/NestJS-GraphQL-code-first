import { Scalar, CustomScalar } from "@nestjs/graphql";
import { Kind, ValueNode } from "graphql";

@Scalar("Date")
export class DateScalar implements CustomScalar<string, Date> {
  description = "Data custom scalar type"

  /* 'serialize' will serialize the value that must be sent to the client */
  serialize(value: Date): string {
    console.log("serialize");
    return value.toISOString()
    // return value.getTime(); // getTime() will return the timestamp
  }

  /* parseValue and parseLiteral are used to process the received value as an argument from the client query */

  parseValue(value: number | string): Date {
    console.log("parseValue");
    return new Date(value)
  }

  parseLiteral(ast: ValueNode): Date {
    console.log("parseLiteral");
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null
  }
}