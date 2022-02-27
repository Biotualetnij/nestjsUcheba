import { Test, TestingModule } from '@nestjs/testing';
import { ArgLoginController } from './arg-login.controller';

describe('ArgLoginController', () => {
  let controller: ArgLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArgLoginController],
    }).compile();

    controller = module.get<ArgLoginController>(ArgLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
