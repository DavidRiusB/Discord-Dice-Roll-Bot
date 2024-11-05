import { Injectable } from '@nestjs/common';
import { EmbedBuilder, Message } from 'discord.js';
import { CharacterService } from 'src/character/character.service';
import { CharacterSheet } from 'src/interfaces/character/character.interface';
import characterComponentEmbed from 'src/utils/components/characterComponent';

@Injectable()
export class CommandService {
  constructor(private characterService: CharacterService) {}

  async handleCommand(
    nickname: string,
    discordUserId: string,
    command: string,
    args: string[],
    message: Message,
  ) {
    if (command === 'character') {
      const character = await this.characterService.getCharacter(
        nickname,
        discordUserId,
      );
      if (!character) {
        return message.reply(
          `No character sheet found for this user. ${discordUserId}`,
        );
      }

      const embed = characterComponentEmbed(character);
      return message.reply({ embeds: [embed] });
    }

    return message.reply('Unknown command.');
  }
}
