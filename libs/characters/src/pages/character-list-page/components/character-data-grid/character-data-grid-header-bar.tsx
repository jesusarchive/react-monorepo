import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Divider, Form, FormField } from '@react-monorepo/ui';
import {
  type CharacterListFilters,
  GENDER,
  type Gender,
  SPECIE,
  type Specie,
  STATUS,
  type Status,
} from '../../../../rest-clients/rick-and-morty/types';

import useCharacterListContext from '../../providers/character-list-provider.hook';
import {
  setCurrentPage,
  setData,
  setFilters,
} from '../../providers/character-list-provider.state';
import GenderFilter from './filters/gender-filter';
import NameFilter from './filters/name-filter';
import SpecieFilter from './filters/specie-filter';
import StatusFilter from './filters/status-filter';
import TypeFilter from './filters/type-filter';

const schema = z.object({
  name: z.string().optional(),
  status: z
    .string()
    .optional()
    .refine(
      (data) => (data ? Object.values(STATUS).includes(data as Status) : true),
      {
        message: 'Status must be alive, dead, or unknown',
      }
    ),
  species: z
    .string()
    .optional()
    .refine(
      (data) => (data ? Object.values(SPECIE).includes(data as Specie) : true),
      {
        message: 'Species must be human or humanoid',
      }
    ),
  type: z.string().optional(),
  gender: z
    .string()
    .optional()
    .refine(
      (data) => (data ? Object.values(GENDER).includes(data as Gender) : true),
      {
        message: 'Gender must be female, male, genderless, or unknown',
      }
    ),
});

export default function CharacterDataGridHeaderBar() {
  const {
    state: { filters, data },
    dispatch,
  } = useCharacterListContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: filters as CharacterListFilters,
  });

  const fullReset = React.useCallback(() => {
    setData(dispatch)({ data: null });
    setFilters(dispatch)({ filters: null });
    setCurrentPage(dispatch)({ currentPage: 1 });
    reset();
  }, [dispatch, reset]);

  const onSearch = React.useCallback(
    (values: CharacterListFilters) => {
      if (JSON.stringify(filters) !== JSON.stringify(values)) {
        setCurrentPage(dispatch)({ currentPage: 1 });
        setFilters(dispatch)({
          filters: values,
        });
      }
    },
    [dispatch, filters]
  );

  const totalItems = React.useMemo(() => {
    const count = data?.info?.count ?? 0;
    return `${count} item${count === 1 ? '' : 's'}`;
  }, [data?.info?.count]);

  return (
    <Form
      className="w-full flex items-center justify-between p-4 gap-4"
      onSubmit={handleSubmit(onSearch)}
    >
      <div className="w-full flex items-center justify-evenly">
        <div className="w-full flex gap-8">
          <div className="flex items-center gap-4">
            <span className="text-xl">{totalItems}</span>
          </div>
          <Divider />
          <div className="flex gap-4">
            <FormField error={errors.name}>
              <NameFilter {...register('name')} />
            </FormField>
            <FormField error={errors.status}>
              <StatusFilter {...register('status')} />
            </FormField>
            <FormField error={errors.species}>
              <SpecieFilter {...register('species')} />
            </FormField>
            <FormField error={errors.type}>
              <TypeFilter {...register('type')} />
            </FormField>
            <FormField error={errors.gender}>
              <GenderFilter {...register('gender')} />
            </FormField>
          </div>
          <Divider />
          <div className="flex gap-4">
            <div>
              <Button type="reset" variant="secondary" onClick={fullReset}>
                Reset
              </Button>
            </div>
            <div>
              <Button type="submit" variant="primary">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
