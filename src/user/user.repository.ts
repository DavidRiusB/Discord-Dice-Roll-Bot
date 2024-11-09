import { Injectable } from '@nestjs/common';
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
}
