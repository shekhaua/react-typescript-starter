import { Dispatch } from 'redux';
import { getAllMockData } from '../services';

export const MockActions = {
  fetchMockData: 'FETCH_MOCK_DATA',
};

export const fetchMockData = () => {
  return async (dispatch: Dispatch /* , getState: Function */) => {
    const resp = await getAllMockData();
    dispatch({
      type: MockActions.fetchMockData,
      payload: resp,
    });
  };
};
