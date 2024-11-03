export interface Class {
  id: string;
  className: string;
  manual: string;
  level: number;
  hitDice: number;
  totalHitDice: number;
  classFeatures: string[]; // Using an array for potential future expansion
}
