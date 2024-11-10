import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUser(id: string) {
    return await this.userRepository.findUser(id);
  }

  async updateSelectedCharacter(id: string, selectedCharacterId: string) {
    return await this.userRepository.updateActiveCharacter(
      id,
      selectedCharacterId,
    );
  }
}
