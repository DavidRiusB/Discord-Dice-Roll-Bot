import {
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
} from 'discord.js';

import { CharacterSheet } from 'src/interfaces/character/character.interface';

const selectCharacterComponent = (characters: CharacterSheet[]) => {
  // Create the embed message
  const embed = new EmbedBuilder()
    .setTitle('Select Your Active Character')
    .setDescription('Choose a character from the dropdown below.');

  // Create the select menu options for each character
  const selectMenu = new StringSelectMenuBuilder()
    .setCustomId('select_character')
    .setPlaceholder('Choose your character')
    .addOptions(
      characters.map((character) => ({
        label: character.characterName,
        value: character.id,
      })),
    );

  // Add the select menu to an action row
  const actionRow =
    new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(selectMenu);

  // Return the embed and select menu as components
  return { embeds: [embed], components: [actionRow] };
};

export default selectCharacterComponent;
