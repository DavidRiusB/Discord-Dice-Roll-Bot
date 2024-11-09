import { Module } from '@nestjs/common';
import { CommandService } from './command.service';
import { CharacterModule } from 'src/character/character.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule, CharacterModule],
  providers: [CommandService],
  exports: [CommandService],
})
export class CommandModule {}
