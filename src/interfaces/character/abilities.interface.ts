export interface AbilityScore {
  total: number;
  base: number;
  abilityModifier: number;
  miscellaneous: number;
  race: number;
  equipment: number;
  note: string;
}

// Main interface for Character Abilities, containing all abilities as properties
export interface CharacterAbilities {
  STR: AbilityScore;
  DEX: AbilityScore;
  CON: AbilityScore;
  INT: AbilityScore;
  WIS: AbilityScore;
  CHA: AbilityScore;
}
