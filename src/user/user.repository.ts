import { Injectable, NotFoundException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { error } from 'console';
import { User } from 'src/interfaces/user/user.interface';

@Injectable()
export class UserRepository {
  private mockUser: User[] = [
    {
      id: 'test1a',
      discordUserId: '295061081565560832',
      selectedCharacter: 'test1b',
      characters: [],
    },
  ];

  async findUser(id: string): Promise<User> {
    const user = this.mockUser.find((user) => user.discordUserId === id);
    return user;
  }

  async updateActiveCharacter(id: string, selectedCharacterId: string) {
    const user = this.mockUser.find((user) => user.discordUserId === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    user.selectedCharacter = selectedCharacterId;
    return user;
  }
}
