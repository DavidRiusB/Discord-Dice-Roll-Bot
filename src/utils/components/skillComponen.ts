import { EmbedBuilder } from 'discord.js';

const skillComponentEmbed = (
  skillName: string,
  total: number,
  keyAbility: string,
  skillRanks: number,
  roll: number,
  abilityBonus: number,
  description: string,
) => {
  return new EmbedBuilder()
    .setColor('#0099ff')
    .setTitle('Skill Roll')
    .setDescription(`${skillName}`)
    .addFields(
      { name: '**Skill Roll Summary**', value: '\u200B' },
      { name: '**Total**', value: `${total}`, inline: true },
      { name: '**Dice Roll**', value: `${roll}`, inline: true },
      { name: '**Ability Bonus**', value: `${abilityBonus}`, inline: true },
      { name: '**Ranks**', value: `${skillRanks}`, inline: true },
      { name: '**Skill Details', value: '\u200B' },
      { name: '**Key Ability**', value: `${keyAbility}`, inline: true },
      { name: '**Description**', value: `${description}`, inline: true },
    );
};
export default skillComponentEmbed;
