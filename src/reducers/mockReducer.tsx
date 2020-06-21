import { AnyAction } from 'redux';
import { MockActions } from '../actions';

const INITIAL_STATE = {
  all: [],
};

export const mockReducer = (reducerState = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
    case MockActions.fetchMockData:
      return { ...reducerState, all: payload };
    default:
      return reducerState;
  }
};
