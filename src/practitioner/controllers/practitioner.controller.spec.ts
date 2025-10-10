import { Test, TestingModule } from '@nestjs/testing';
import { PractitionerController } from './practitioner.controller';

describe('PractitionerController', () => {
  let controller: PractitionerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PractitionerController],
    }).compile();

    controller = module.get<PractitionerController>(PractitionerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
