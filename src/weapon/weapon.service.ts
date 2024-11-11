import { Injectable, NotFoundException } from '@nestjs/common';
import { WeaponRepository } from './weapon.repository';
import { Weapon } from 'src/interfaces/equipment/weapon.interface';

@Injectable()
export class WeaponService {
  constructor(private readonly weaponRepository: WeaponRepository) {}

  async getWeapon(id: string): Promise<Weapon> {
    const weapon = await this.weaponRepository.findById(id);
    if (!weapon) {
      throw new NotFoundException(`Weapon with ID ${id} not found`);
    }
    return weapon;
  }

  async getAllWeapons(): Promise<Weapon[]> {
    return await this.weaponRepository.findAll();
  }

  async addWeapon(newWeapon: Weapon): Promise<Weapon> {
    return await this.weaponRepository.create(newWeapon);
  }

  async editWeapon(id: string, updates: Partial<Weapon>): Promise<Weapon> {
    const weapon = await this.weaponRepository.update(id, updates);
    if (!weapon) {
      throw new NotFoundException(`Weapon with ID ${id} not found`);
    }
    return weapon;
  }

  async deleteWeapon(id: string): Promise<void> {
    const result = await this.weaponRepository.delete(id);
    if (!result) {
      throw new NotFoundException(`Weapon with ID ${id} not found`);
    }
  }
}
