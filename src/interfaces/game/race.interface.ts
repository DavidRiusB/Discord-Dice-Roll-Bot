export interface Race {
  id: string;
  name: string;
  levelAdjustment: number;
  raceFeatures: string[]; // Using an array for potential future expansion
}
