import { Injectable } from '@nestjs/common';
import { EmbedBuilder, Message } from 'discord.js';
import { CharacterService } from 'src/character/character.service';
import { CharacterSheet } from 'src/interfaces/character/character.interface';

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

      const embed = this.createCharacterEmbed(character);
      return message.reply({ embeds: [embed] });
    }

    return message.reply('Unknown command.');
  }

  // Helper to create embed for a D&D-like character sheet
  private createCharacterEmbed(character: CharacterSheet) {
    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle(`${character.characterName} ${character.characterLastName}`)
      .setDescription(`Character Sheet for ${character.playerName}`)
      .setThumbnail('https://example.com/character-thumbnail.png') // Optional: link to character image
      .addFields(
        { name: '**Basic Info**', value: '\u200B' },
        { name: 'Race', value: character.raceId || 'Unknown', inline: true },
        { name: 'Gender', value: character.gender || 'Unknown', inline: true },
        {
          name: 'Alignment',
          value: character.alignment || 'Unknown',
          inline: true,
        },
        { name: 'Deity', value: character.deity || 'Unknown', inline: true },
        {
          name: 'Age',
          value: character.age?.toString() || 'Unknown',
          inline: true,
        },
        {
          name: 'Weight',
          value: character.weight?.toString() || 'Unknown',
          inline: true,
        },
        { name: 'Skin', value: character.skin || 'Unknown', inline: true },
        { name: 'Hair', value: character.hair || 'Unknown', inline: true },
        { name: 'Eyes', value: character.eyes || 'Unknown', inline: true },
      )
      .setFooter({ text: `Character ID: ${character.id}` });

    return embed;
  }
}
