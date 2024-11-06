import { EmbedBuilder } from 'discord.js';

const attackComponentEmbed = (
  name: string,
  attackRoll: number,
  rollAtk: { total: number; rolls: number[] },
  baseAttack: number,
  rollDmg: { total: number; rolls: number[] },
  modifier: string,
  abilityModifier: number,
  STR: number,
) => {
  return new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle(`${name} Melee Attack`)
    .setDescription(`Weapon: temporary`) // Placeholder for weapon name
    .addFields(
      { name: '**Attack Summary**', value: '\u200B' },
      { name: 'Total Attack Roll', value: `**${attackRoll}**`, inline: true },
      { name: 'Roll Result', value: `${rollAtk.total}`, inline: true },
      {
        name: 'Base Attack',
        value: `|BA: ${baseAttack}|${modifier} Mod: ${abilityModifier}|`,
        inline: true,
      },

      { name: '**Damage Summary**', value: '\u200B' },
      {
        name: 'Total Damage',
        value: `**${rollDmg.total + STR}**`,
        inline: true,
      },
      {
        name: 'Damage Rolls',
        value: `[${rollDmg.rolls.join(', ')}]`,
        inline: true,
      },
      { name: 'Strength Modifier', value: `${STR}`, inline: true },
    );
};

export default attackComponentEmbed;
