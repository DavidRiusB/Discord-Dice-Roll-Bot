import { EmbedBuilder } from 'discord.js';
import { CharacterSheet } from 'src/interfaces/character/character.interface';

const characterComponentEmbed = (character: CharacterSheet) => {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle(`${character.characterName} ${character.characterLastName}`)
    .setDescription(`Character Sheet for ${character.playerName}`)
    .setThumbnail('https://example.com/character-thumbnail.png') // Optional: link to character image
    .addFields(
      // Basic Info Section
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
      { name: '\u200B', value: '\u200B' }, // Spacer for visual separation

      // Ability Scores Section
      { name: '**Ability Scores**', value: '\u200B' },
      {
        name: 'STR',
        value: character.abilityScores.STR.total.toString(),
        inline: true,
      },
      {
        name: 'DEX',
        value: character.abilityScores.DEX.total.toString(),
        inline: true,
      },
      {
        name: 'CON',
        value: character.abilityScores.CON.total.toString(),
        inline: true,
      },
      {
        name: 'INT',
        value: character.abilityScores.INT.total.toString(),
        inline: true,
      },
      {
        name: 'WIS',
        value: character.abilityScores.WIS.total.toString(),
        inline: true,
      },
      {
        name: 'CHA',
        value: character.abilityScores.CHA.total.toString(),
        inline: true,
      },
      { name: '\u200B', value: '\u200B' }, // Spacer for visual separation

      // Saves Section
      { name: '**Saves**', value: '\u200B' },
      {
        name: 'Fortitude',
        value: character.saves.fortitude.total.toString(),
        inline: true,
      },
      {
        name: 'Reflex',
        value: character.saves.reflex.total.toString(),
        inline: true,
      },
      {
        name: 'Will',
        value: character.saves.will.total.toString(),
        inline: true,
      },

      // Res Section
      {
        name: 'Spell Resistance',
        value: character.spellResist?.toString() || '0',
        inline: true,
      },
      {
        name: 'Power Resistance',
        value: character.powerResist?.toString() || '0',
        inline: true,
      },
    )
    .setFooter({ text: `Player: ${character.playerName}` });

  return embed;
};

export default characterComponentEmbed;
