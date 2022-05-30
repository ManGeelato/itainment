import React from 'react';
import renderer from 'react-test-renderer';

import Home from './Home';

test('Is the component working as expected', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
})

describe("getMedia", () => {
    test("Is Media being fetched from API", async () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})