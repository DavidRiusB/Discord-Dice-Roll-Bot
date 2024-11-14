import { Injectable } from '@nestjs/common';
import { Weapon } from '../interfaces/equipment/weapon.interface';
import { AbilityType } from 'src/Enums/abilities/abilities.enums';

@Injectable()
export class WeaponRepository {
  private weapons: Weapon[] = [
    {
      id: '1',
      createdBy: 'user1',
      name: 'Long Sword',
      cost: 150,
      damageDiceType: 8,
      damageDiceCount: 1,
      criticalRange: 19,
      range: 0,
      weight: 3,
      damageType: 'Slashing',
      weaponType: 'Simple',
      weaponEnhancement: 0,
      weaponFocus: 0,
      weaponSpecialization: 0,
      ammunition: 0,
      damageAbility: AbilityType.STR,
    },
    {
      id: '2',
      createdBy: 'user2',
      name: 'Crossbow',
      cost: 250,
      damageDiceType: 10,
      damageDiceCount: 1,
      criticalRange: 20,
      range: 80,
      weight: 5,
      damageType: 'Pircing',
      weaponType: 'Simple',
      weaponEnhancement: 0,
      weaponFocus: 0,
      weaponSpecialization: 0,
      ammunition: 20,
      damageAbility: AbilityType.NONE,
    },
  ];

  async findById(id: string): Promise<Weapon | null> {
    return this.weapons.find((weapon) => weapon.id === id) || null;
  }

  async findAll(): Promise<Weapon[]> {
    return this.weapons;
  }

  async create(newWeapon: Weapon): Promise<Weapon> {
    this.weapons.push(newWeapon);
    return newWeapon;
  }

  async update(id: string, updates: Partial<Weapon>): Promise<Weapon | null> {
    const weaponIndex = this.weapons.findIndex((weapon) => weapon.id === id);
    if (weaponIndex === -1) return null;

    const updatedWeapon = { ...this.weapons[weaponIndex], ...updates };
    this.weapons[weaponIndex] = updatedWeapon;
    return updatedWeapon;
  }

  async delete(id: string): Promise<boolean> {
    const weaponIndex = this.weapons.findIndex((weapon) => weapon.id === id);
    if (weaponIndex === -1) return false;

    this.weapons.splice(weaponIndex, 1);
    return true;
  }
}
