import { AbilityType } from 'src/Enums/abilities/abilities.enums';

export interface Weapon {
  id: string;
  createdBy: string;
  name: string;
  cost: number;
  damageDiceType: number;
  damageDiceCount: number;
  criticalRange: number;
  range: number;
  weight: number;
  damageType: string;
  weaponType: string;
  weaponEnhancement: number;
  weaponFocus: number;
  weaponSpecialization: number;
  ammunition: number;
  damageAbility: AbilityType;
}
