import { useQuery } from '@react-monorepo/react-query';
import getRickAndMortyCharacters, {
  type GetRickAndMortyCharactersParams,
} from '../../../rest-clients/rick-and-morty/get-rick-and-morty-characters';
import type { CharacterResponse } from '../../../rest-clients/rick-and-morty/types';

export default function useGetRickAndMortyCharacters(
  props: GetRickAndMortyCharactersParams = {}
) {
  return useQuery<CharacterResponse>({
    queryKey: ['get-rick-and-morty-character-list', ...Object.values(props)],
    queryFn: async () => getRickAndMortyCharacters(props),
  });
}
