import { EmbedBuilder } from 'discord.js';

const attackComponentEmbed = (
  name: string,
  attackRoll: number,
  rollAtk: { total: number; rolls: number[] },
  baseAttack: number,
  damage: number,
  rollDmg: { total: number; rolls: number[] },
) => {
  const embed = new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle(`${name} Melee Attack:`)
    .setDescription(`**Damage Roll:** ${rollDmg.rolls.join(', ')}`)
    .addFields(
      { name: '**Melee Attack**', value: '\u200B' },
      { name: 'Attack Total', value: `${attackRoll}`, inline: true },
      { name: 'Attack Roll', value: `${rollAtk.total}`, inline: true },
      { name: 'Base Attack', value: `${baseAttack}`, inline: true },
      { name: 'Damage Total', value: `${damage}`, inline: true },
    );

  return embed; // Return the embed object
};
export default attackComponentEmbed;
