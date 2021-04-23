import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Tabs } from './index.js';

configure({ adapter: new Adapter() });

describe('Tabs component', () => {
    const component = mount(<Tabs tabs={
        [
            { title: 'Tab1', content: 'Tab1 Content' },
            { title: 'Tab2', content: 'Tab2 Content' },
            { title: 'Tab3', content: 'Tab3 Content' }
        ]} />);

    it('Tabs have to display the right number contributed of list elements', () => {
        const componentListItemsLength = component.find('li').length;
        const tabsPropsLength = component.props().tabs.length;

        expect(componentListItemsLength).toEqual(tabsPropsLength)
    });

    it('Tabs have to display the right content when clicked', () => {
        let content = component.find('.content');
        let contentLength = component.find('.content').length;

        const lis = component.find('li');

        expect(contentLength).toEqual(0);

        const firstTabContent = component.props().tabs[0].content;
        lis.at(0).simulate('click');

        content = component.find('.content');
        contentLength = content.length;

        expect(contentLength).toEqual(1);
        expect(content.text()).toEqual(firstTabContent);
    });
});