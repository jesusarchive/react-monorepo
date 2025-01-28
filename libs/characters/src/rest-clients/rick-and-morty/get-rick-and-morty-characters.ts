import { handleFetchErrors } from '../../rest-clients/api-error';
import { getVerbs } from '@react-monorepo/utils';

import { API_CONFIG } from '../api-config';
import { CharacterListFilters } from './types';

export type GetRickAndMortyCharactersProps = CharacterListFilters;

export default async function getRickAndMortyCharacters({
  name,
  status,
  species,
  type,
  gender,
}: GetRickAndMortyCharactersProps) {
  const { get } = getVerbs();
  const endpoint = `${API_CONFIG.baseUrl}/character`;

  try {
    const res = await get(endpoint, {
      params: {
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
