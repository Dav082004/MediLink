import { Module } from '@nestjs/common';
import { PractitionerController } from './controllers/practitioner.controller';

@Module({
  controllers: [PractitionerController]
})
export class PractitionerModule {}
