import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SummarizeService } from './summarize.service';
import { Summarize } from '../common/entities/summarize.entity';
import { CreateSummarizeInput } from './dto/create-summarize.input';
import { UpdateSummarizeInput } from './dto/update-summarize.input';

@Resolver(() => Summarize)
export class SummarizeResolver {
  constructor(private readonly summarizeService: SummarizeService) {}

  @Mutation(() => Summarize)
  createSummarize(@Args('createSummarizeInput') createSummarizeInput: CreateSummarizeInput) {
    return this.summarizeService.create(createSummarizeInput);
  }

  @Query(() => [Summarize], { name: 'summarize' })
  findAll() {
    return this.summarizeService.findAll();
  }

  @Query(() => Summarize, { name: 'summarize' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.summarizeService.findOne(id);
  }

  @Mutation(() => Summarize)
  updateSummarize(@Args('updateSummarizeInput') updateSummarizeInput: UpdateSummarizeInput) {
    return this.summarizeService.update(updateSummarizeInput.id, updateSummarizeInput);
  }

  @Mutation(() => Summarize)
  removeSummarize(@Args('id', { type: () => Int }) id: number) {
    return this.summarizeService.remove(id);
  }
}
