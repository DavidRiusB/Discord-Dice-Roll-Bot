import { SlashCommandBuilder } from 'discord.js';
const attackCommand = new SlashCommandBuilder()
  .setName('attack')
  .setDescription('Rolls a dice for melee, ranged, or grapple attacks.')
  .addStringOption((option) =>
    option
      .setName('type')
      .setDescription('Type of Attack')
      .setRequired(true)
      .addChoices(
        { name: 'Melee', value: 'melee' },
        { name: 'Range', value: 'range' },
        { name: 'Grapple', value: 'grapple' },
      ),
  );
export default attackCommand;
