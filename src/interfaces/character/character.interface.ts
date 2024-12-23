import { Alignment, Gender } from 'src/Enums/charatcer/character.enums';
import { CharacterAbilities } from './abilities.interface';
import { Saves } from './saves.interface';
import { Weapon } from '../equipment/weapon.interface';
export interface CharacterSheet {
  id: string;
  discordUserId: string;
  ECL: number;
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
  baseAttack: number;
  attackAbilityModifier: string;
  activeWeapon: string;
  weapons: Weapon[];
}
