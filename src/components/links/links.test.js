import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { Link } from './index.js';

describe('Link component', () => {
    it('Link changes the class when hovered', () => {
        const component = renderer.create(
            <Link page="http://www.facebook.com">Facebook</Link>,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // manually trigger the callback
        act(() => tree.props.onMouseEnter());

        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // manually trigger the callback
        act(() => tree.props.onMouseLeave());
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});