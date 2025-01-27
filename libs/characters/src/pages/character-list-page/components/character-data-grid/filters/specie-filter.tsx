import React from 'react';

import { Select, type SelectProps } from '@react-monorepo/ui';
import { SPECIE } from '../../../../../rest-clients/rick-and-morty/types';
import capitalize from '../../../../../utils/capitalize';

const SpecieFilter = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const specieSelectOptions = React.useMemo(
      () => [
        { value: '', label: 'Filter by specie' },
        ...Object.values(SPECIE).map((el) => ({
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
        options={specieSelectOptions}
        {...props}
      />
    );
  }
);

export default SpecieFilter;
