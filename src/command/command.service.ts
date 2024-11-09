import { Injectable } from '@nestjs/common';
import { Interaction } from 'discord.js';
import { CharacterService } from 'src/character/character.service';
import { UserService } from 'src/user/user.service';
import { attackRolls, skillRolls } from 'src/utils';
import characterComponentEmbed from 'src/utils/components/characterComponent';

@Injectable()
export class CommandService {
  constructor(
    private readonly characterService: CharacterService,
    private readonly userService: UserService,
  ) {}

  async handleCommand(
    discordUserId: string,
    command: string,
    options: any, // Use the appropriate type for options if available
    interaction: Interaction,
  ) {
    // Ensure the interaction is a CommandInteraction
    if (!interaction.isCommand()) {
      return; // Optionally, handle this case differently
    }

    const user = await this.userService.getUser(discordUserId);
    if (!user) {
      return interaction.reply(`Discord User ID not found.`);
    }

    const activeCharacter = await this.characterService.getCharacter(
      user.selectedCharacter,
    );
    if (!activeCharacter) {
      return interaction.reply(
        'Character with ID ${user.selectedCharacter} not found for user.',
      );
    }

    if (command === 'character') {
      const embed = characterComponentEmbed(activeCharacter);
      return interaction.reply({ embeds: [embed] });
    }

    if (command === 'select') {
      const selection = options.getString('type');
    }

    if (command === 'attack') {
      const attackType = options.getString('type');

      const attackResult = attackRolls(attackType, activeCharacter);
      return interaction.reply({ embeds: [attackResult] });
    }

    if (command === 'skill') {
      const skillName = options.getString('type');

      const skillResults = skillRolls(skillName, activeCharacter);
      return interaction.reply({ embeds: [skillResults] });
    }

    return interaction.reply('Unknown command.');
  }
}
