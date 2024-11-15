import { AbilityType } from 'src/Enums/abilities/abilities.enums';

export type SkillName =
  | 'appraise'
  | 'balance'
  | 'bluff'
  | 'climb'
  | 'concentration'
  | 'craft'
  | 'decipherScript'
  | 'diplomacy'
  | 'disableDevice'
  | 'disguise'
  | 'escapeArtist'
  | 'forgery'
  | 'gatherInformation'
  | 'handleAnimal'
  | 'heal'
  | 'hide'
  | 'intimidate'
  | 'jump'
  | 'knowledgeArcana'
  | 'knowledgeArchitecture'
  | 'knowledgedungeoneering'
  | 'knowledgeGeography'
  | 'knowledgeHistory'
  | 'knowledgeLocal'
  | 'knowledgeNature'
  | 'knowledgeNobility'
  | 'knowledgeReligion'
  | 'knowledgePlanes'
  | 'listen'
  | 'moveSilently'
  | 'openLock'
  | 'perform'
  | 'profession'
  | 'ride'
  | 'search'
  | 'senseMotive'
  | 'sleightHand'
  | 'speakLanguage'
  | 'spellcraft'
  | 'spot'
  | 'survival'
  | 'swim'
  | 'tumble'
  | 'useMagicDevice'
  | 'useRope';

export interface Skill {
  name: string;
  ranks: number;
  modifier: AbilityType;
  proficiency?: boolean;
  racialBonus: number;
  miscBonus: number;
  description: string;
}

export interface SkillSheet {
  id: string;
  characterId: string;
  skills: Record<SkillName, Skill>;
}
