import { Injectable } from '@nestjs/common';
import { CharacterRepository } from './character.repository';

@Injectable()
export class CharacterService {
  constructor(private readonly characterRepository: CharacterRepository) {}
  async getCharacerByName(name: string) {}
}
