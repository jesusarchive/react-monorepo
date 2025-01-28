import { useCallback, useEffect } from 'react';

import useGetRickAndMortyCharacters from '../../hooks/use-get-rick-and-morty-characters';
import useCharacterListContext from '../../providers/character-list-provider.hook';
import {
  setCurrentPage,
  setData,
} from '../../providers/character-list-provider.state';
import CharacterDataGridHeaderBar from './character-data-grid-header-bar';
import CharacterDataGridPagination from './character-data-grid-pagination';
import CharacterList from './character-list';

export default function CharacterDataGrid() {
  const { state, dispatch } = useCharacterListContext();

  const { data, isLoading, error } = useGetRickAndMortyCharacters({
    page: state?.currentPage,
    ...state?.filters,
  });

  const onPreviousPageClick = useCallback(() => {
    setCurrentPage(dispatch)({ currentPage: state?.currentPage - 1 });
  }, [dispatch, state?.currentPage]);

  const onNextPageClick = useCallback(() => {
    setCurrentPage(dispatch)({ currentPage: state?.currentPage + 1 });
  }, [dispatch, state?.currentPage]);

  useEffect(() => {
    if (JSON.stringify(state?.data?.info) !== JSON.stringify(data?.info)) {
      setData(dispatch)({ data: data ?? null });
    }
  }, [data, dispatch, state?.data?.info]);

  return (
    <div className="h-full w-full p-10 flex flex-col gap-6">
      <div className="flex flex-col gap-14 p-6">
        <h1 className="font-bold text-xl">Characters from Dimension C-137</h1>
        <CharacterDataGridHeaderBar />
      </div>
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="h-full overflow-y-auto border-t border-gray-200">
            <CharacterList
              loading={!error && isLoading}
              items={data?.results}
            />
          </div>
        </div>
        <CharacterDataGridPagination
          onPreviousPageClick={onPreviousPageClick}
          onNextPageClick={onNextPageClick}
          previousPageDisabled={state?.currentPage === 1 || isLoading}
          nextPageDisabled={!data?.info?.next || isLoading}
        />
      </div>
    </div>
  );
}
