import { Injectable } from '@nestjs/common';
import { CreateSummarizeInput } from './dto/create-summarize.input';
import { UpdateSummarizeInput } from './dto/update-summarize.input';

@Injectable()
export class SummarizeService {
  create(createSummarizeInput: CreateSummarizeInput) {
    return 'This action adds a new summarize';
  }

  findAll() {
    return `This action returns all summarize`;
  }

  findOne(id: number) {
    return `This action returns a #${id} summarize`;
  }

  update(id: number, updateSummarizeInput: UpdateSummarizeInput) {
    return `This action updates a #${id} summarize`;
  }

  remove(id: number) {
    return `This action removes a #${id} summarize`;
  }
}
