import { Test, TestingModule } from '@nestjs/testing';
import { ArgSignupController } from './arg-signup.controller';

describe('ArgSignupController', () => {
  let controller: ArgSignupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArgSignupController],
    }).compile();

    controller = module.get<ArgSignupController>(ArgSignupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
