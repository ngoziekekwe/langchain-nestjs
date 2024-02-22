import { Test, TestingModule } from '@nestjs/testing';
import { SummarizeResolver } from '../summarize.resolver';
import { SummarizeService } from '../summarize.service';

describe('SummarizeResolver', () => {
  let resolver: SummarizeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummarizeResolver, SummarizeService],
    }).compile();

    resolver = module.get<SummarizeResolver>(SummarizeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
