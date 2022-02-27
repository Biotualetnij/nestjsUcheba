import { Test, TestingModule } from '@nestjs/testing';
import { ArgLoginService } from './arg-login.service';

describe('ArgLoginService', () => {
  let service: ArgLoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArgLoginService],
    }).compile();

    service = module.get<ArgLoginService>(ArgLoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
