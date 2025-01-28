import { handleFetchErrors } from '../../rest-clients/api-error';
import { getVerbs } from '@react-monorepo/utils';

import { API_CONFIG } from '../api-config';
import type { CharacterListFilters } from './types';

export type GetRickAndMortyCharactersParams = CharacterListFilters & {
  page?: number;
};

export default async function getRickAndMortyCharacters({
  page,
  name,
  status,
  species,
  type,
  gender,
}: GetRickAndMortyCharactersParams) {
  const { get } = getVerbs();
  const endpoint = `${API_CONFIG.baseUrl}/character`;

  try {
    const res = await get(endpoint, {
      params: {
        ...(typeof page === 'number' && { page: String(page) }),
        ...(name && { name }),
        ...(status && { status }),
        ...(species && { species }),
        ...(type && { type }),
        ...(gender && { gender }),
      },
    });

    return await res.json();
  } catch (ex) {
    throw await handleFetchErrors(ex);
  }
}
