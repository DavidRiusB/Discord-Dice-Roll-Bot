import { CharacterSheet } from 'src/interfaces/character/character.interface';
import rollDice from './dice.utils';
import attackComponentEmbed from './components/attackComponent';

const attackRolls = (atkType: string, character: CharacterSheet) => {
  const { baseAttack, characterName, abilityScores, baseAttackAbilityMod } =
    character;

  // Get attack modifiers
  const abilityModifier = abilityScores[baseAttackAbilityMod].abilityModifier;
  const modifier = baseAttackAbilityMod;
  const STR = abilityScores.STR.abilityModifier;

  let attackRoll, damageRoll;

  switch (atkType) {
    case 'melee':
      // Roll for attack and damage
      const rollAtk = rollDice(1, 20);
      attackRoll = rollAtk.total + baseAttack + abilityModifier;

      const rollDmg = rollDice(2, 6); // Adjust dice roll for damage type
      damageRoll = rollDmg.total + STR;

      // Return embed component
      return attackComponentEmbed(
        characterName,
        attackRoll,
        rollAtk,
        baseAttack,
        rollDmg,
        modifier,
        abilityModifier,
        STR,
      );

    default:
      throw new Error(`Unknown attack type: ${atkType}`);
  }
};
export default attackRolls;
