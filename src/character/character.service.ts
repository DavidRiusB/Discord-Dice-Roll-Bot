import { Injectable } from '@nestjs/common';
import { CharacterRepository } from './character.repository';
import { CharacterSheet } from 'src/interfaces/character/character.interface';

@Injectable()
export class CharacterService {
  constructor(private readonly characterRepository: CharacterRepository) {}

  async getCharacter(characterId: string): Promise<CharacterSheet> {
    // Call the findCharacter method with the appropriate arguments
    return await this.characterRepository.findCharacter(characterId);
  }
}
