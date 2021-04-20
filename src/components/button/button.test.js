import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Button } from './index.js';

configure({ adapter: new Adapter() });

describe('Button component', () => {
    it('Button text changes and equal the props when clicked', () => {
        const component = mount(<Button clickedText="You clicked on me" />);
        const buttonText = component.text();
        const buttonTextProps = component.props().clickedText;

        expect(buttonText).toEqual('Click on me')

        component.simulate('click');

        const buttonTextClicked = component.text();
        expect(buttonTextClicked).toEqual(buttonTextProps)
    });
});