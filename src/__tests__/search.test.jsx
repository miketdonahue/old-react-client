import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../search';
import ShowCard from '../showCard';

describe('<Search />', () => {
  it('should render correctly', () => {
    const component = shallow(<Search />);

    expect(component).toMatchSnapshot();
  });

  it('should render correct amount of shows', () => {
    const component = shallow(<Search />);

    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it('should render correct amount of shows based on search term', () => {
    const searchWord = 'black';
    const component = shallow(<Search />);
    const showCount = preload.shows.filter(
      show => `${show.title} ${show.description}`.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0,
    ).length;

    component.find('input').simulate('change', { target: { value: searchWord } });

    expect(component.find(ShowCard).length).toEqual(showCount);
  });
});
