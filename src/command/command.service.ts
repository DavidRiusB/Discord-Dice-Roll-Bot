import { Injectable } from '@nestjs/common';
import {
  EmbedBuilder,
  Interaction,
  CommandInteraction,
  InteractionType,
} from 'discord.js';
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
    options: any, // Use the appropriate type for options if available
    interaction: Interaction,
  ) {
    // Ensure the interaction is a CommandInteraction
    if (!interaction.isCommand()) {
      return; // Optionally, handle this case differently
    }

    if (command === 'character') {
      const character = await this.characterService.getCharacter(
        nickname,
        discordUserId,
      );
      if (!character) {
        return interaction.reply(
          `No character sheet found for this user. ${discordUserId}`,
        );
      }

      const embed = characterComponentEmbed(character);
      return interaction.reply({ embeds: [embed] });
    }

    if (command === 'attack') {
      const attackType = options.getString('type'); // Assuming you're passing the attack type as a string option
      const character = await this.characterService.getCharacter(
        nickname,
        discordUserId,
      );
      if (!character) {
        return interaction.reply(
          `No character sheet found for this user. ${discordUserId}`,
        );
      }

      // Here you would call your attack function, e.g., attackRolls
      // const attackResult = attackRolls(attackType, character);
      // return interaction.reply(attackResult);

      // Placeholder response for now
      return interaction.reply(`You chose to attack with ${attackType}.`);
    }

    return interaction.reply('Unknown command.');
  }
}
