import { Test, TestingModule } from '@nestjs/testing';
import { SummonService } from './summon.service';

describe('SummonService', () => {
  let service: SummonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummonService],
    }).compile();

    service = module.get<SummonService>(SummonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
