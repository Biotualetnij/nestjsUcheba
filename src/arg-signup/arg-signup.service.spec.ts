import { Test, TestingModule } from '@nestjs/testing';
import { ArgSignupService } from './arg-signup.service';

describe('ArgSignupService', () => {
  let service: ArgSignupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArgSignupService],
    }).compile();

    service = module.get<ArgSignupService>(ArgSignupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
