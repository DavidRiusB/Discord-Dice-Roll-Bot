import { Module } from '@nestjs/common';
import { CharacterRepository } from 'src/character/character.repository';
import { CharacterService } from 'src/character/character.service';

@Module({
  providers: [CharacterRepository, CharacterService],
  exports: [CharacterRepository, CharacterService],
})
export class CharacterModule {}
