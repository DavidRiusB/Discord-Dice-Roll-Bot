import { AbilityType } from 'src/Enums/abilities/abilities.enums';

export interface BaseAttackDescription {
  total: number;
  baseAB: number;
  epicAB: number;
  abilityModifier: AbilityType;
  sizeModifier: number;
  tempModifier: number;
}

export interface BaseAttack {
  melee: BaseAttackDescription;
  ranged: BaseAttackDescription;
  grapple: BaseAttackDescription;
}
