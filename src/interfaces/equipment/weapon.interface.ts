export interface Weapon {
  id: string;
  creatorId: string;
  name: string;
  cost: number;
  damageDiceType: number;
  damageDiceCount: number;
  criticalRange: number;
  range: number;
  weight: number;
  dmgType: string;
  weaponType: string;
}
