import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });
describe('Test', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />);
    const state = component.state().listing;
    console.log(state);
    expect(component.exists()).toBe(true);
  });
});
