export const Status = {
  ALIVE: 'alive',
  DEAD: 'dead',
  UNKNOWN: 'unknown',
} as const;
export type StatusType = (typeof Status)[keyof typeof Status];

export const Gender = {
  FEMALE: 'female',
  MALE: 'male',
  GENDERLESS: 'genderless',
  UNKNOWN: 'unknown',
} as const;
export type GenderType = (typeof Gender)[keyof typeof Gender];

export const Specie = {
  HUMAN: 'human',
  HUMANOID: 'humanoid',
} as const;
export type SpecieType = (typeof Specie)[keyof typeof Specie];

export type Location = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: StatusType;
  species: SpecieType;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type CharacterResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};

export type CharacterFilters = {
  name?: string;
  status?: StatusType;
  species?: SpecieType;
  type?: string;
  gender?: GenderType;
};
