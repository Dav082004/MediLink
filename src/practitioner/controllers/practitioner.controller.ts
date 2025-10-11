import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesTypes } from 'src/auth/auth.types';
import { Roles } from 'src/auth/roles/roles.decorator';
import { RolesGuard } from 'src/auth/roles/roles.guard';

@Controller('practitioner')
export class PractitionerController {
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RolesTypes.ADMIN)
  @Post('register-practitioner')
  public async create() {
    return 'registrar';
  }
}
