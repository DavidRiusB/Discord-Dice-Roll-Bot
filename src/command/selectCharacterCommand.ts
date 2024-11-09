import { SlashCommandBuilder } from 'discord.js';

const selectCharacterCommand = new SlashCommandBuilder()
  .setName('select')
  .setDescription('Select active character')
  .addSubcommand((subcommand) =>
    subcommand.setName('character').setDescription('Select Active Character'),
  );

export default selectCharacterCommand;
