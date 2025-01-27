export const STATUS = {
  ALIVE: 'alive',
  DEAD: 'dead',
  UNKNOWN: 'unknown',
} as const;
export type Status = (typeof STATUS)[keyof typeof STATUS];

export const GENDER = {
  FEMALE: 'female',
  MALE: 'male',
  GENDERLESS: 'genderless',
  UNKNOWN: 'unknown',
} as const;
export type Gender = (typeof GENDER)[keyof typeof GENDER];

export const SPECIE = {
  HUMAN: 'human',
  HUMANOID: 'humanoid',
} as const;
export type Specie = (typeof SPECIE)[keyof typeof SPECIE];

export type Location = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: Specie;
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

export type CharacterListFilters = {
  name?: string;
  status?: Status;
  species?: Specie;
  type?: string;
  gender?: Gender;
};
