import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage { ...mockProps} />);
})

test('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
})

test('renders loading with isPending', () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: true
  }
  const wrapper4 = shallow(<MainPage {...mockProps4} />);
  expect(wrapper4).toMatchSnapshot();
})

test('filters robots correctly', () => {
  expect(wrapper.instance().filteredRobots()).toEqual([])
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filteredRobots()).toEqual([{
    id: 1,
    name: 'John Snow',
    username: 'JohnJohn',
    email: 'john@gmail.com'
  }])
})

test('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false
  };
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filteredRobots()).toEqual([])
})