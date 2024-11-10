import { Injectable } from '@nestjs/common';
import { CharacterRepository } from './character.repository';
import { CharacterSheet } from 'src/interfaces/character/character.interface';

@Injectable()
export class CharacterService {
  constructor(private readonly characterRepository: CharacterRepository) {}

  async getCharacter(characterId: string): Promise<CharacterSheet> {
    return await this.characterRepository.findCharacter(characterId);
  }

  async getAllUserCharacters(userId: string): Promise<CharacterSheet[]> {
    return await this.characterRepository.findAllUserCharacters(userId);
  }
}
