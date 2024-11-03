import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotService } from './bot/bot.service';
import { config } from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { CommandService } from './command/command.service';
import { CharacterService } from './character/character.service';
import { RollService } from './roll/roll.service';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [ConfigModule.forRoot(), CharacterModule],
  controllers: [AppController],
  providers: [
    AppService,
    BotService,
    CommandService,
    CharacterService,
    RollService,
  ],
})
export class AppModule {}
