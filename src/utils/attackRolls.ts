import { CharacterSheet } from 'src/interfaces/character/character.interface';
import rollDice from './dice.utils';
import attackComponentEmbed from './components/attackComponent';

const attackRolls = (atkType: string, character: CharacterSheet) => {
  const {
    baseAttack,
    characterName,
    abilityScores,
    attackAbilityModifier,
    weapons,
    activeWeapon,
  } = character;

  // Retrieve modifiers
  const abilityModifier = abilityScores[attackAbilityModifier]?.abilityModifier;
  const modifier = attackAbilityModifier;
  const STR = abilityScores.STR.abilityModifier;
  const DEX = abilityScores.DEX.abilityModifier;

  // Find the active weapon
  const weapon = weapons.find((w) => w.id === activeWeapon);
  if (!weapon) {
    console.error(
      `Active weapon with ID ${activeWeapon} not found in weapons array.`,
    );
    return null; // or handle the missing weapon case as needed
  }

  // Retrieve weapon stats
  const { damageDiceType, damageDiceCount } = weapon;

  // Initial rolls (adjust damage dice as needed per case)
  const rollAtk = rollDice(1, 20);
  const rollDmg = rollDice(damageDiceCount, damageDiceType);

  let attackRoll, damageRoll;

  switch (atkType) {
    case 'melee':
      attackRoll = rollAtk.total + baseAttack + abilityModifier;
      damageRoll = rollDmg.total + STR;

      return attackComponentEmbed(
        characterName,
        attackRoll,
        rollAtk,
        baseAttack,
        damageRoll,
        rollDmg,
        modifier,
        abilityModifier,
        STR,
      );

    case 'range':
      attackRoll = rollAtk.total + baseAttack + DEX;
      damageRoll = rollDmg.total;

      return attackComponentEmbed(
        characterName,
        attackRoll,
        rollAtk,
        baseAttack,
        damageRoll,
        rollDmg,
        'DEX',
        DEX,
        STR,
      );

    case 'grapple':
      attackRoll = rollAtk.total + baseAttack + abilityModifier;

      return attackComponentEmbed(
        characterName,
        attackRoll,
        rollAtk,
        baseAttack,
        0, // Grapple attacks might have no initial damage
        { total: 0, rolls: [] },
        modifier,
        abilityModifier,
        STR,
      );

    default:
      throw new Error(`Unknown attack type: ${atkType}`);
  }
};
export default attackRolls;
