import { FormikValues } from 'formik';

export const SET_RENT_FILTERS = 'SET_RENT_FILTERS';

export type setRentActionType = {
  type: string;
  payload: { filters: FormikValues };
};

export const setRentFilters = (filters: FormikValues) => ({
  type: SET_RENT_FILTERS,
  payload: {
    filters
  }
});