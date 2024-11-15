import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsRepository } from './skills.repository';

@Module({
  providers: [SkillsService, SkillsRepository],
  exports: [SkillsService, SkillsRepository],
})
export class SkillsModule {}
