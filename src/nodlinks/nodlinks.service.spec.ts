import { Test, TestingModule } from '@nestjs/testing';
import { NodlinksService } from './nodlinks.service';

describe('NodlinksService', () => {
  let service: NodlinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NodlinksService],
    }).compile();

    service = module.get<NodlinksService>(NodlinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
