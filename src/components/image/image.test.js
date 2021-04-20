import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Image } from './index.js';

configure({ adapter: new Adapter() });

describe('Image component', () => {
    it('Image should have src and alt', () => {
        const component = mount(<Image alt='testImage' src='https://i.picsum.photos/id/980/200/300.jpg?hmac=HeQeE7MnUiOHTOqHUI4GrY3wL5tloq1zukVClSAcUB8' />);
        const imgElement = component.find("img")
        const imgElementProp = imgElement.prop("src");
        const altElementProp = imgElement.prop("alt");

        // img test
        expect(imgElementProp)
            .toEqual(component.props().src);

        // alt test
        expect(altElementProp)
            .toEqual(component.props().alt);
    });
});