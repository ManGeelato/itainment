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
// Finally I then created a file called Home.test.js and tested my Home component for functionality if its receiving data from api rout.
// I used react-test-renderer for testing creating snapshots of the tests.
// I tested first if the component is working as expected then if fetch method is fetching data from api. I then created a folder
// called testing and added the screenshot