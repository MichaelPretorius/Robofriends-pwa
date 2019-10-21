import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';
import * as reducers from './reducers';
import * as actions from './actions';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  }

  test('should return initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch)
  })

  test('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, actions.setSearchField('abc'))).toEqual({ searchField: 'abc' })
  })
})

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false
  }

  test('should return initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })
  
  test('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_PENDING })).toEqual({
      robots: [],
      isPending: true
    })
  });

  test('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(reducers.requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_SUCCESS, payload: [{
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }] })).toEqual({
      robots: [{
        id: 1,
        name: 'John Snow',
        username: 'JohnJohn',
        email: 'john@gmail.com'
      }],
      isPending: false
    })
  });

  test('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED, payload: 'NOOOOO!!!!!'
    })).toEqual({
      robots: [],
      isPending: false,
      error: 'NOOOOO!!!!!'
    })
  });
  
})

