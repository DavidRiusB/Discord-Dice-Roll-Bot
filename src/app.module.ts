import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotService } from './bot/bot.service';
import { config } from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { CommandService } from './command/command.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, BotService, CommandService],
})
export class AppModule {}
