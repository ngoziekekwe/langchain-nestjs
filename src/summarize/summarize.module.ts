import { Module } from '@nestjs/common';
import { SummarizeService } from './summarize.service';
import { SummarizeResolver } from './summarize.resolver';

@Module({
  providers: [SummarizeResolver, SummarizeService]
})
export class SummarizeModule {}
