import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CharacterModule } from './character/character.module';
import { BotModule } from './bot/bot.module';
import { CommandModule } from './command/command.module';
import { DiceModule } from './dice/dice.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CharacterModule,
    BotModule,
    CommandModule,
    DiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
