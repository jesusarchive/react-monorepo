import { Button } from '@react-monorepo/ui';
import React from 'react';
import { setCurrentPage } from '../../providers/character-list-provider.state';
import useCharacterListContext from '../../providers/character-list-provider.hook';

export default function CharacterDataGridPagination() {
  const { state, dispatch } = useCharacterListContext();

  const isPreviousPageDisabled = React.useMemo(
    () => state?.currentPage === 1 || state?.isLoading,
    [state?.currentPage, state?.isLoading]
  );
  const isNextPageDisabled = React.useMemo(
    () => !state?.data?.info?.next || state?.isLoading,
    [state?.data?.info?.next, state?.isLoading]
  );

  const onPreviousPageClick = React.useCallback(() => {
    setCurrentPage(dispatch)({ currentPage: state?.currentPage - 1 });
  }, [dispatch, state?.currentPage]);

  const onNextPageClick = React.useCallback(() => {
    setCurrentPage(dispatch)({ currentPage: state?.currentPage + 1 });
  }, [dispatch, state?.currentPage]);

  return (
    <div className="flex justify-between items-center mt-4 p-6 border-t">
      <span className="text-gray-700">Page {state?.currentPage ?? 0}</span>
      <div className="flex gap-4">
        <Button onClick={onPreviousPageClick} disabled={isPreviousPageDisabled}>
          Previous
        </Button>
        <Button onClick={onNextPageClick} disabled={isNextPageDisabled}>
          Next
        </Button>
      </div>
    </div>
  );
}
