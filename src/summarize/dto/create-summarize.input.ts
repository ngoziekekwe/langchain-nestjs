import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSummarizeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
