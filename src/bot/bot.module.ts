import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BotService } from './bot.service';
import { CommandService } from 'src/command/command.service';
import { CommandModule } from 'src/command/command.module';

@Module({
  imports: [ConfigModule.forRoot(), CommandModule],
  providers: [BotService],
  exports: [BotService],
})
export class BotModule {}
