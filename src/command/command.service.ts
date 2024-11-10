import { Injectable } from '@nestjs/common';
import { Interaction } from 'discord.js';
import { CharacterService } from 'src/character/character.service';
import { UserService } from 'src/user/user.service';
import { attackRolls, skillRolls } from 'src/utils';
import characterComponentEmbed from 'src/utils/components/characterComponent';
import selectCharacterComponent from 'src/utils/components/selectCharacterComponent';

@Injectable()
export class CommandService {
  constructor(
    private readonly characterService: CharacterService,
    private readonly userService: UserService,
  ) {}

  async handleCommand(
    discordUserId: string,
    command: string,
    options: any,
    interaction: Interaction,
  ) {
    // Ensure the interaction is a CommandInteraction
    if (!interaction.isCommand()) {
      return;
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
      const characters = await this.characterService.getAllUserCharacters(
        user.discordUserId,
      );

      if (characters.length === 0) {
        return interaction.reply('No characters found for user');
      }
      const component = selectCharacterComponent(characters);
      return interaction.reply({
        embeds: component.embeds,
        components: component.components,
      });
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

  async handleSelecMenu(userId: string, interaction: Interaction) {
    // Check if the interaction is for selecting a character
    if (
      !interaction.isStringSelectMenu() ||
      interaction.customId !== 'select_character'
    )
      return;

    const selectedCharacterId = interaction.values[0];
    try {
      await this.userService.updateSelectedCharacter(
        userId,
        selectedCharacterId,
      );
      const character =
        await this.characterService.getCharacter(selectedCharacterId);
      const characterName = character
        ? character.characterName
        : 'your character';
      await interaction.reply({
        content: `Your active character has been set to ${characterName}!`,
        ephemeral: true,
      });
    } catch (error) {
      console.error('Failed to update character:', error);

      await interaction.reply({
        content:
          'An error occurred while setting your active character. Please try again later.',
        ephemeral: true,
      });
    }
  }
}
