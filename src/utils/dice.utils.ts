/**
 * Rolls a set of dice and calculates the total.
 * @param numDice - The number of dice to roll.
 * @param sides - The number of sides each die has.
 * @returns { total: number, rolls: number[] } - An object containing the total sum and an array of individual dice rolls.
 */
const rollDice = (numDice: number, sides: number) => {
  // Generate an array of individual dice rolls
  const diceRolls = Array.from(
    { length: numDice },
    () => Math.floor(Math.random() * sides) + 1,
  );

  // Calculate the total sum of all rolls
  const total = diceRolls.reduce((sum, roll) => sum + roll, 0);

  return { total, rolls: diceRolls };
};

export default rollDice;
