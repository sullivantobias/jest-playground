import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Image } from './index.js';

configure({ adapter: new Adapter() });

describe('Image component', () => {
    it('Image should have src and alt', () => {
        const component = mount(<Image alt='testImage' src='https://i.picsum.photos/id/980/200/300.jpg?hmac=HeQeE7MnUiOHTOqHUI4GrY3wL5tloq1zukVClSAcUB8' />);

        // img test
        expect(component.find("img")
            .prop("src"))
            .toEqual(component.props().src);

        // alt test
        expect(component.find("img")
            .prop("alt"))
            .toEqual(component.props().alt);
    });
});