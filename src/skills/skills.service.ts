import { Injectable } from '@nestjs/common';
import { SkillsRepository } from './skills.repository';

@Injectable()
export class SkillsService {
  constructor(private readonly skillsRepository: SkillsRepository) {}
}
