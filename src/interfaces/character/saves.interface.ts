// Interface for individual save bonuses
export interface Save {
  total: number;
  baseSave: number;
  abilityModifier: number;
  epicSaveBonus: number;
  miscellaneous: number;
  temporaryModifier: number;
  raceModifier: number;
  conditional: Record<string, number>; // Used for specific conditions or situational modifiers
  note: string;
}

// Interface for all character saves
export interface Saves {
  fortitude: Save;
  reflex: Save;
  will: Save;
}
