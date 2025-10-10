import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PractitionerModule } from './practitioner/practitioner.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PractitionerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
