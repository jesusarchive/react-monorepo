import React from 'react';

import { Select, type SelectProps } from '@react-monorepo/ui';
import capitalize from '../../../../../utils/capitalize';
import { GENDER } from '../../../../../rest-clients/rick-and-morty/types';

const GenderFilter = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const genderSelectOptions = React.useMemo(
      () => [
        { value: '', label: 'Filter by gender' },
        ...Object.values(GENDER).map((el) => ({
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
        options={genderSelectOptions}
        {...props}
      />
    );
  }
);

export default GenderFilter;
