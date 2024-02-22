import { CreateSummarizeInput } from './create-summarize.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSummarizeInput extends PartialType(CreateSummarizeInput) {
  @Field(() => Int)
  id: number;
}
