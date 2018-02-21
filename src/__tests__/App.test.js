import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Landing from '../pages/Landing';

test('<Landing />', () => {
  const component = shallow(<Landing />);

  expect(toJson(component)).toMatchSnapshot();
});
