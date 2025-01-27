import { useQuery } from '@react-monorepo/react-query';
import getRickAndMortyCharacters from '../../../rest-clients/rick-and-morty/get-rick-and-morty-characters';
import type {
  CharacterListFilters,
  CharacterResponse,
} from '../../../rest-clients/rick-and-morty/types';

export type UseGetRickAndMortyCharactersProps = CharacterListFilters;

export default function useGetRickAndMortyCharacters(
  props: UseGetRickAndMortyCharactersProps = {}
) {
  return useQuery<CharacterResponse>({
    queryKey: ['get-rick-and-morty-character-list', ...Object.values(props)],
    queryFn: async () => getRickAndMortyCharacters(props),
  });
}
