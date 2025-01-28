import { Button } from '@react-monorepo/ui';

type CharacterDataGridPaginationProps = {
  onPreviousPageClick?: () => void;
  onNextPageClick?: () => void;
  previousPageDisabled?: boolean;
  nextPageDisabled?: boolean;
};

export default function CharacterDataGridPagination({
  onPreviousPageClick,
  onNextPageClick,
  previousPageDisabled,
  nextPageDisabled,
}: CharacterDataGridPaginationProps) {
  return (
    <div className="flex justify-center mt-4 p-6 gap-4 border-t bg-white">
      <Button onClick={onPreviousPageClick} disabled={previousPageDisabled}>
        Previous
      </Button>
      <Button onClick={onNextPageClick} disabled={nextPageDisabled}>
        Next
      </Button>
    </div>
  );
}
