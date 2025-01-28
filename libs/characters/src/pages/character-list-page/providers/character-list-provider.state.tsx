import React from 'react';

import type {
  CharacterListFilters,
  CharacterResponse,
} from '../../../rest-clients/rick-and-morty/types';

export type CharacterListActionKind =
  (typeof CharacterListActionKind)[keyof typeof CharacterListActionKind];

const CharacterListActionKind = {
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_FILTERS: 'SET_FILTERS',
  SET_DATA: 'SET_DATA',
} as const;

export type CharacterListState = {
  currentPage: number;
  filters: CharacterListFilters | null;
  data: CharacterResponse | null;
};

type CharacterListSetCurrentPagePayload = {
  currentPage: number;
};

type CharacterListSetFiltersPayload = {
  filters: CharacterListFilters | null;
};

type CharacterListSetDataPayload = {
  data: CharacterResponse | null;
};

export type CharacterListAction = {
  type: CharacterListActionKind;
  payload:
    | CharacterListSetCurrentPagePayload
    | CharacterListSetFiltersPayload
    | CharacterListSetDataPayload;
};

export const getDefaultState = (): CharacterListState => ({
  currentPage: 1,
  filters: {},
  data: null,
});

export function CharacterListPageReducer(
  state: CharacterListState,
  action: CharacterListAction
) {
  switch (action.type) {
    case CharacterListActionKind.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: (action.payload as CharacterListSetCurrentPagePayload)
          .currentPage,
      };
    }
    case CharacterListActionKind.SET_FILTERS: {
      return {
        ...state,
        filters: (action.payload as CharacterListSetFiltersPayload).filters,
      };
    }
    case CharacterListActionKind.SET_DATA: {
      return {
        ...state,
        data: (action.payload as CharacterListSetDataPayload).data,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const setCurrentPage =
  (dispatch: React.Dispatch<CharacterListAction>) =>
  ({ currentPage }: CharacterListSetCurrentPagePayload) => {
    dispatch({
      type: CharacterListActionKind.SET_CURRENT_PAGE,
      payload: { currentPage },
    });
  };

export const setFilters =
  (dispatch: React.Dispatch<CharacterListAction>) =>
  ({ filters }: CharacterListSetFiltersPayload) => {
    dispatch({
      type: CharacterListActionKind.SET_FILTERS,
      payload: { filters },
    });
  };

export const setData =
  (dispatch: React.Dispatch<CharacterListAction>) =>
  ({ data }: CharacterListSetDataPayload) => {
    dispatch({
      type: CharacterListActionKind.SET_DATA,
      payload: { data },
    });
  };
