import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

const mockStore = configureStore([thunk]);

describe('setSearchField action', () => {
  test('should create an action to search robots', () => {
    const text = 'wo';
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  });
})

describe('requestRobots action', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots())
  const action = store.getActions();

  test('should handle requesting robots API', () => {
    expect(action[0]).toEqual({ type: REQUEST_ROBOTS_PENDING })
  })
  
})
