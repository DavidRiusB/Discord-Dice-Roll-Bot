import { CharacterSheet } from 'src/interfaces/character/character.interface';
import rollDice from './dice.utils';
import skillComponentEmbed from './components/skillComponen';

const skillRolls = (skill: string, characterSheet: CharacterSheet) => {
  const { abilityScores, skills } = characterSheet;

  const roll = rollDice(1, 20);
  const keyAbility = skills[skill].modifier;
  const skillRanks = skills[skill].ranks;
  const skillName = skills[skill].name;
  const abilityBonus = abilityScores[keyAbility].abilityModifier;
  const total = roll.total + skillRanks + abilityBonus;
  const description = skills[skill].description;

  return skillComponentEmbed(
    skillName,
    total,
    keyAbility,
    skillRanks,
    roll.total,
    abilityBonus,
    description,
  );
};
export default skillRolls;
