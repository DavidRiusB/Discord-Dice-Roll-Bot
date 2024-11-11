import { Module } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { WeaponRepository } from './weapon.repository';

@Module({
  providers: [WeaponService, WeaponRepository],
  exports: [WeaponService, WeaponRepository],
})
export class WeaponModule {}
