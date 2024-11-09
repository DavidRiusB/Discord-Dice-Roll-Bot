import { CharacterSheet } from '../character/character.interface';

export interface User {
  id: string;
  discordUserId: string;
  selectedCharacter: string;
  characters: string[];
}
