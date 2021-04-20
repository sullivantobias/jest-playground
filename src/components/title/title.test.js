import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Title } from './index.js';

configure({ adapter: new Adapter() });

describe('Title component', () => {
    it('Title without title should not generate', () => {
        const componentWithoutTitle = mount(<Title tag="2" />);

        expect(componentWithoutTitle.find(`h${componentWithoutTitle.props().tag}`)
            .exists())
            .toBeFalsy();
    });

    it('Title with title generate', () => {
        const componentWithTitle = mount(<Title tag="2" title={'this is a test title'} />);
        const title = componentWithTitle.find(`h${componentWithTitle.props().tag}`);
        const titleProps = componentWithTitle.props().title;

        expect(title
            .exists())
            .toBeTruthy();

        expect(title
            .text())
            .toEqual(titleProps);
    });
});