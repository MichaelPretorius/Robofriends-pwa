import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

test('expect to render Card Component', () => {
  expect(shallow(<Card />)).toMatchSnapshot()
})