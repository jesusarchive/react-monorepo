import React from 'react';

import { Spinner } from '@react-monorepo/ui';

import useGetRickAndMortyCharacters from '../../hooks/use-get-rick-and-morty-characters';
import useCharacterListContext from '../../providers/character-list-provider.hook';
import { setResults } from '../../providers/character-list-provider.state';
import CharacterDataGridHeaderBar from './character-data-grid-header-bar';
import CharacterList from './character-list';

export default function CharacterDataGrid() {
  const { state, dispatch } = useCharacterListContext();
  const { data, isLoading, error } = useGetRickAndMortyCharacters(
    state.filters ?? {}
  );

  React.useEffect(() => {
    if (JSON.stringify(state?.results) !== JSON.stringify(data?.results)) {
      setResults(dispatch)({ results: data?.results ?? null });
    }
  }, [data?.results, dispatch, state?.results]);

  const hasData = React.useMemo(
    () =>
      !isLoading &&
      !error &&
      Array.isArray(data?.results) &&
      data?.results?.length > 0,
    [isLoading, error, data?.results]
  );

  return (
    <div className="h-full w-full p-10">
      <div className="flex flex-col gap-14 p-6">
        <h1 className="font-bold text-xl">Characters from Dimension C-137</h1>
        <CharacterDataGridHeaderBar />
      </div>
      <div className="h-full w-full flex flex-col gap-8 overflow-hidden">
        {error && (
          <div className="h-[75vh] flex justify-center items-center">
            <p>Error fetching characters.</p>
          </div>
        )}
        {!error && isLoading && (
          <div className="h-[75vh] flex justify-center items-center">
            <Spinner />
          </div>
        )}
        {hasData && (
          <div className="overflow-y-auto h-[75vh] p-6">
            <CharacterList data={data?.results} />
          </div>
        )}
      </div>
    </div>
  );
}
