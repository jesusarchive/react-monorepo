import React from 'react';

import type {
  CharacterListFilters,
  CharacterResponse,
} from '../../../rest-clients/rick-and-morty/types';

export const DEFAULT_PAGE = 1;

export type CharacterListActionKind =
  (typeof CharacterListActionKind)[keyof typeof CharacterListActionKind];

const CharacterListActionKind = {
  SET_LOADING: 'SET_LOADING',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_FILTERS: 'SET_FILTERS',
  SET_DATA: 'SET_DATA',
} as const;

export type CharacterListState = {
  isLoading: boolean;
  currentPage: number;
  filters: CharacterListFilters | null;
  data: CharacterResponse | null;
};

type CharacterListSetLoadingPayload = {
  isLoading: boolean;
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
    | CharacterListSetLoadingPayload
    | CharacterListSetCurrentPagePayload
    | CharacterListSetFiltersPayload
    | CharacterListSetDataPayload;
};

export const getDefaultState = (): CharacterListState => ({
  isLoading: false,
  currentPage: DEFAULT_PAGE,
  filters: {},
  data: null,
});

export function CharacterListPageReducer(
  state: CharacterListState,
  action: CharacterListAction
) {
  switch (action.type) {
    case CharacterListActionKind.SET_LOADING: {
      return {
        ...state,
        isLoading: (action.payload as CharacterListSetLoadingPayload).isLoading,
      };
    }
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

export const setLoading =
  (dispatch: React.Dispatch<CharacterListAction>) =>
  ({ isLoading }: CharacterListSetLoadingPayload) => {
    dispatch({
      type: CharacterListActionKind.SET_LOADING,
      payload: { isLoading },
    });
  };

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
