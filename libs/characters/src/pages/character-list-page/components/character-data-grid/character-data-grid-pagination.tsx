import { Button } from '@react-monorepo/ui';

type CharacterDataGridPaginationProps = {
  onPreviousPageClick?: () => void;
  onNextPageClick?: () => void;
  previousPageDisabled?: boolean;
  nextPageDisabled?: boolean;
  currentPage?: number;
};

export default function CharacterDataGridPagination({
  onPreviousPageClick,
  onNextPageClick,
  previousPageDisabled,
  nextPageDisabled,
  currentPage,
}: CharacterDataGridPaginationProps) {
  return (
    <div className="flex justify-between items-center mt-4 p-6 border-t">
      <span className="text-gray-700">Page {currentPage ?? 0}</span>
      <div className="flex gap-4">
        <Button onClick={onPreviousPageClick} disabled={previousPageDisabled}>
          Previous
        </Button>
        <Button onClick={onNextPageClick} disabled={nextPageDisabled}>
          Next
        </Button>
      </div>
    </div>
  );
}
