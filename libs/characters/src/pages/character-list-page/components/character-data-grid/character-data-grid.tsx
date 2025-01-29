import React from 'react';
import useGetRickAndMortyCharacters from '../../hooks/use-get-rick-and-morty-characters';
import useCharacterListContext from '../../providers/character-list-provider.hook';
import {
  DEFAULT_PAGE,
  setData,
  setLoading,
} from '../../providers/character-list-provider.state';
import CharacterDataGridHeaderBar from './character-data-grid-header-bar';
import CharacterDataGridPagination from './character-data-grid-pagination';
import CharacterList from './character-list';

export default function CharacterDataGrid() {
  const { state, dispatch } = useCharacterListContext();

  const { data, isLoading } = useGetRickAndMortyCharacters({
    page: state?.currentPage ?? DEFAULT_PAGE,
    ...state?.filters,
  });

  React.useEffect(() => {
    setLoading(dispatch)({ isLoading });

    if (
      data?.info &&
      JSON.stringify(state?.data?.info) !== JSON.stringify(data?.info)
    ) {
      setData(dispatch)({ data });
    }
  }, [data, dispatch, isLoading, state?.data?.info]);

  return (
    <div className="h-full w-full p-10 flex flex-col gap-6">
      <div className="p-6">
        <h1 className="font-bold text-xl">Characters from Dimension C-137</h1>
      </div>
      <div className="flex p-6">
        <CharacterDataGridHeaderBar />
      </div>
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="h-full overflow-y-auto border-t border-gray-200">
            <CharacterList />
          </div>
        </div>
        <CharacterDataGridPagination />
      </div>
    </div>
  );
}
