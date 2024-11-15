import { Injectable } from '@nestjs/common';
import { Alignment, Gender } from 'src/Enums/charatcer/character.enums';
import { CharacterSheet } from 'src/interfaces/character/character.interface';
import { AbilityType } from 'src/Enums/abilities/abilities.enums';

@Injectable()
export class CharacterRepository {
  private mockCharacter: CharacterSheet[] = [
    {
      id: 'test1b',
      discordUserId: '295061081565560832',
      ECL: 3,
      characterName: 'Test Character',
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
          total: 14,
          base: 14,
          miscellaneous: 0,
          race: 0,
          equipment: 0,
          note: '',
          abilityModifier: 2,
        },
        DEX: {
          total: 15,
          base: 15,
          miscellaneous: 0,
          race: 2,
          equipment: 0,
          note: '',
          abilityModifier: 2,
        },
        CON: {
          total: 12,
          base: 12,
          miscellaneous: 0,
          race: 0,
          equipment: 0,
          note: '',
          abilityModifier: 1,
        },
        INT: {
          total: 14,
          base: 14,
          miscellaneous: 0,
          race: 0,
          equipment: 0,
          note: '',
          abilityModifier: 2,
        },
        WIS: {
          total: 13,
          base: 13,
          miscellaneous: 0,
          race: 0,
          equipment: 0,
          note: '',
          abilityModifier: 1,
        },
        CHA: {
          total: 10,
          base: 10,
          miscellaneous: 0,
          race: 0,
          equipment: 0,
          note: '',
          abilityModifier: 0,
        },
      },
      saves: {
        fortitude: {
          total: 4,
          baseSave: 3,
          abilityModifier: 1,
          epicSaveBonus: 0,
          miscellaneous: 0,
          temporaryModifier: 0,
          raceModifier: 0,
          conditional: [],
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
          conditional: [],
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
          conditional: [],
          note: '',
        },
      },
      spellResist: 0,
      powerResist: 0,
      arcaneSpellFailure: 10,
      baseAttack: 2,
      attackAbilityModifier: 'STR',
      weapons: [
        {
          id: '1',
          createdBy: 'user1',
          name: 'Long Sword',
          cost: 150,
          damageDiceType: 8,
          damageDiceCount: 1,
          criticalRange: 19,
          range: 0,
          weight: 3,
          damageType: 'Slashing',
          weaponType: 'Simple',
          weaponEnhancement: 0,
          weaponFocus: 0,
          weaponSpecialization: 0,
          ammunition: 0,
          damageAbility: AbilityType.STR,
        },
        {
          id: '2',
          createdBy: 'user2',
          name: 'Crossbow',
          cost: 250,
          damageDiceType: 10,
          damageDiceCount: 1,
          criticalRange: 20,
          range: 80,
          weight: 5,
          damageType: 'Pircing',
          weaponType: 'Simple',
          weaponEnhancement: 0,
          weaponFocus: 0,
          weaponSpecialization: 0,
          ammunition: 20,
          damageAbility: AbilityType.NONE,
        },
      ],
      activeWeapon: '1',
    },
  ];

  async findCharacter(characterId: string): Promise<CharacterSheet> {
    return this.mockCharacter.find((char) => char.id === characterId);
  }

  async findAllUserCharacters(userId: string): Promise<CharacterSheet[]> {
    const characters = this.mockCharacter.filter(
      (character) => character.discordUserId === userId,
    );
    return characters;
  }
}
