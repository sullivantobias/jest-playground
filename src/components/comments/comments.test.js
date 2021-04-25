import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Comments } from './index.js';

configure({ adapter: new Adapter() });

describe('Comments component', () => {
    it('Comment input value have to add a comment after submiting', () => {
        const component = mount(<Comments />);
        const form = component.find('form');
        const input = component.find('input');
        let commentsLength = component.find('li').length;

        expect(commentsLength).toEqual(0)

        input.getDOMNode().value = 'Test Input';

        form.simulate('submit');

        const addedLi = component.find('li')
        commentsLength = component.find('li').length;

        expect(commentsLength).toEqual(1)
        expect(addedLi.text()).toEqual(input.getDOMNode().value)

        input.getDOMNode().value = 'Test Input 2';

        form.simulate('submit');

        commentsLength = component.find('li').length;
        expect(commentsLength).toEqual(2)
    });
});