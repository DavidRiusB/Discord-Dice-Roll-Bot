import { CharacterSheet } from 'src/interfaces/character/character.interface';
import rollDice from './dice.utils';
import attackComponentEmbed from './components/attackComponent';

const attackRolls = (atkType: string, character: CharacterSheet) => {
  switch (atkType) {
    case 'melee':
      // Perform the attack roll
      const rollAtk = rollDice(1, 20);
      const attackRoll =
        rollAtk.total +
        character.baseAttack +
        character.abilityScores[character.baseAttackAbilityMod].total;

      // Perform damage roll (temporary for now)
      const rollDmg = rollDice(2, 6); // Assuming a 2d6 damage roll
      const dmg = rollDmg.total + character.abilityScores.STR.total;

      // Create the embed
      return attackComponentEmbed(
        character.characterName,
        attackRoll,
        rollAtk,
        character.baseAttack,
        dmg,
        rollDmg,
      );
  }
};
export default attackRolls;
