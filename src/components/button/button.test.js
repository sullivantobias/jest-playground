import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Button } from './index.js';

configure({ adapter: new Adapter() });

describe('Button component', () => {
    it('Button text changes and equal the props when clicked', () => {
        const component = mount(<Button clickedText="You clicked on me" />);

        expect(component.text()).toEqual('Click on me')

        component.simulate('click');

        expect(component.text()).toEqual(component.props().clickedText)
    });
});