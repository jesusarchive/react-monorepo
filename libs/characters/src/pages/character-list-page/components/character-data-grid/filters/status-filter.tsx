import React from 'react';

import { Select, type SelectProps } from '@react-monorepo/ui';
import { STATUS } from '../../../../../rest-clients/rick-and-morty/types';
import { capitalize } from '@react-monorepo/utils';

const StatusFilter = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props: SelectProps, ref) => {
    const statusSelectOptions = React.useMemo(
      () => [
        { value: '', label: 'Filter by status' },
        ...Object.values(STATUS).map((el) => ({
          value: el,
          label: capitalize(el),
        })),
      ],
      []
    );

    return (
      <Select
        ref={ref}
        className="border p-2 rounded"
        options={statusSelectOptions}
        {...props}
      />
    );
  }
);

export default StatusFilter;
