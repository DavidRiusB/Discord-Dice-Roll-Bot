import { Injectable } from '@nestjs/common';
import { Alignment, Gender } from 'src/Enums/charatcer/character.enums';

import { CharacterSheet } from 'src/interfaces/character/character.interface';
import { AbilityType } from '../Enums/abilities/abilities.enums';

@Injectable()
export class CharacterRepository {
  private mockCharacter: CharacterSheet[] = [
    {
      id: '1a',
      discordUserId: '295061081565560832',
      ECL: 3,
      characterName: 'Pepito',
      characterLastName: 'Doe',
      playerName: 'John',
      homeland: 'Elven Forest',
      raceId: 'elf123',
      type: 'Elf',
      gender: Gender.Female,
      alignment: Alignment.N, // Cast to Alignment if needed
      deity: 'Corellon',
      age: 120,
      weight: 65,
      skin: 'Fair',
      hair: 'Silver',
      eyes: 'Green',
      equipmentId: 'eq123',
      abilityScores: {
        STR: {
          total: 10,
          base: 10,
          miscellaneous: 0,
          race: 0,
          equipment: 0,
          note: '',
          abilityModifier: 0,
        },
        DEX: {
          total: 15,
          base: 15,
          miscellaneous: 0,
          race: 2,
          equipment: 0,
          note: '',
          abilityModifier: 0,
        },
        CON: {
          total: 12,
          base: 12,
          miscellaneous: 0,
          race: 0,
          equipment: 0,
          note: '',
          abilityModifier: 0,
        },
        INT: {
          total: 14,
          base: 14,
          miscellaneous: 0,
          race: 0,
          equipment: 0,
          note: '',
          abilityModifier: 0,
        },
        WIS: {
          total: 13,
          base: 13,
          miscellaneous: 0,
          race: 0,
          equipment: 0,
          note: '',
          abilityModifier: 0,
        },
        CHA: {
          total: 8,
          base: 8,
          miscellaneous: 0,
          race: 0,
          equipment: 0,
          note: '',
          abilityModifier: 0,
        },
      },
      saves: {
        fortitude: {
          total: 5,
          baseSave: 3,
          abilityModifier: 1,
          epicSaveBonus: 0,
          miscellaneous: 1,
          temporaryModifier: 0,
          raceModifier: 0,
          conditional: {},
          note: '',
        },
        reflex: {
          total: 6,
          baseSave: 3,
          abilityModifier: 2,
          epicSaveBonus: 0,
          miscellaneous: 1,
          temporaryModifier: 0,
          raceModifier: 0,
          conditional: {},
          note: '',
        },
        will: {
          total: 4,
          baseSave: 2,
          abilityModifier: 1,
          epicSaveBonus: 0,
          miscellaneous: 1,
          temporaryModifier: 0,
          raceModifier: 0,
          conditional: {},
          note: '',
        },
      },
      spellResist: 0,
      powerResist: 0,
      arcaneSpellFailure: 10,
      baseAttack: 2,
      baseAttackAbilityMod: 'STR',
    },
  ];

  // Optionally, add methods to retrieve the mock data for testing purposes
  async findCharacter(nick: string, id: string): Promise<CharacterSheet> {
    return await this.mockCharacter.find(
      (character) => character.discordUserId === id,
    );
  }

  getAllCharacters(): CharacterSheet[] {
    return this.mockCharacter;
  }
}
