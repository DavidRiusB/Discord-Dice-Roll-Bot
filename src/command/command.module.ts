import { Module } from '@nestjs/common';
import { CommandService } from './command.service';
import { CharacterModule } from 'src/character/character.module';

@Module({
  imports: [CharacterModule],
  providers: [CommandService],
  exports: [CommandService],
})
export class CommandModule {}
