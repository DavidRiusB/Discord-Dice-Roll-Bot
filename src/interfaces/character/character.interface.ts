import { Alignment, Gender } from 'src/Enums/charatcer/character.enums';
import { CharacterAbilities } from './abilities.interface';
import { Saves } from './saves.interface';
import { AbilityType } from 'src/Enums/abilities/abilities.enums';

export interface CharacterSheet {
  id: string;
  discordUserId: string;
  ECL: string;
  characterName: string;
  characterLastName: string;
  playerName: string;
  homeland: string;
  raceId: string;
  type: string;
  gender: Gender;
  alignment: Alignment;
  deity: string;
  age: number;
  weight: number;
  skin: string;
  hair: string;
  eyes: string;
  equipmentId: string;
  abilityScores: CharacterAbilities;
  saves: Saves;
  spellResist: number;
  powerResist: number;
  arcaneSpellFailure: number;
  baseAttack: Record<AbilityType, number>;
}
