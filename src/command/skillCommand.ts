import { SlashCommandBuilder } from 'discord.js';

const skillCommand = new SlashCommandBuilder()
  .setName('skill')
  .setDescription('Rolls a dice for a skill')
  .addSubcommand((subcommand) =>
    subcommand
      .setName('knowledge')
      .setDescription('Knowledge Skills')
      .addStringOption((option) =>
        option
          .setName('type')
          .setDescription('Select a Knowledge skill')
          .setRequired(true)
          .addChoices(
            { name: 'Knowledge (arcana)', value: 'knowledgeArcana' },
            {
              name: 'Knowledge (architecture and engineering)',
              value: 'knowledgeArchitecture',
            },
            {
              name: 'Knowledge (dungeoneering)',
              value: 'knowledgedungeoneering',
            },
            {
              name: 'Knowledge (geography)',
              value: 'knowledgeGeography',
            },
            {
              name: 'Knowledge (history)',
              value: 'knowledgeHistory',
            },
            {
              name: 'Knowledge (local)',
              value: 'knowledgeLocal',
            },
            {
              name: 'Knowledge (nature)',
              value: 'knowledgeNature',
            },
            {
              name: 'Knowledge (nobility and royalty)',
              value: 'knowledgeNobility',
            },
            {
              name: 'Knowledge (religion)',
              value: 'knowledgeReligion',
            },
            {
              name: 'Knowledge (the planes)',
              value: 'knowledgePlanes',
            },
          ),
      ),
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName('mental')
      .setDescription('Mental Skills')
      .addStringOption((option) =>
        option
          .setName('type')
          .setDescription('Select a Mental skill')
          .setRequired(true)
          .addChoices(
            { name: 'Concentration', value: 'concentration' },
            { name: 'Decipher Script', value: 'decipherScript' },
            { name: 'Disable Device', value: 'disableDevice' },
            { name: 'Forgery', value: 'forgery' },
            { name: 'Heal', value: 'heal' },
            { name: 'Open Lock', value: 'openLock' },
            { name: 'Speak Language', value: 'speakLanguage' },
            { name: 'Survival', value: 'survival' },
            { name: 'Use Magic Device', value: 'useMagicDevice' },
          ),
      ),
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName('physical')
      .setDescription('Physical Skills')
      .addStringOption((option) =>
        option
          .setName('type')
          .setDescription('Select a Physical skill')
          .setRequired(true)
          .addChoices(
            { name: 'Balance', value: 'balance' },
            { name: 'Climb', value: 'climb' },
            { name: 'Escape Artist', value: 'escapeArtist' },
            { name: 'Hide', value: 'hide' },
            { name: 'Jump', value: 'jump' },
            { name: 'Move Silently', value: 'moveSilently' },
            { name: 'Perform', value: 'perform' },
            { name: 'Ride', value: 'ride' },
            { name: 'Sleight of Hand', value: 'sleightHand' },
            { name: 'Tumble', value: 'swim' },
            { name: 'Swim', value: 'tumble' },
          ),
      ),
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName('perception')
      .setDescription('Perception Skills')
      .addStringOption((option) =>
        option
          .setName('type')
          .setDescription('Select a perception skill')
          .setRequired(true)
          .addChoices(
            { name: 'Listen', value: 'listen' },
            { name: 'Search', value: 'search' },
            { name: 'Spot', value: 'spot' },
          ),
      ),
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName('social')
      .setDescription('Social Skills')
      .addStringOption((option) =>
        option
          .setName('type')
          .setDescription('Select a Social skill')
          .setRequired(true)
          .addChoices(
            { name: 'Bluff', value: 'bluff' },
            { name: 'Diplomacy', value: 'diplomacy' },
            { name: 'Gather Information', value: 'gatherInformation' },
            { name: 'Handle Animal', value: 'handleAnimal' },
            { name: 'Intimidate', value: 'intimidate' },
            { name: 'Sense Motive', value: 'senseMotive' },
          ),
      ),
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName('others')
      .setDescription('Other Skills')
      .addStringOption((option) =>
        option
          .setName('type')
          .setDescription('Select another skill')
          .setRequired(true)
          .addChoices(
            { name: 'Appraise', value: 'appraise' },
            { name: 'Craft', value: 'craft' },
            { name: 'Disguise', value: 'disguise' },
            { name: 'Profession', value: 'profession' },
            { name: 'Spellcraf', value: 'spellcraft' },
            { name: 'Use Rope', value: 'useRope' },
          ),
      ),
  );

export default skillCommand;
