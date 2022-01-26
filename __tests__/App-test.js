/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, { create, act } from 'react-test-renderer';

import ListItem from '../src/components/ListItem';

const item = {
  id: 'Hylo4Snaf',
  url: 'https://cdn.thedogapi.com/images/Hylo4Snaf.jpeg',
  width: 1200,
  height: 922,
  mime_type: 'image/jpeg',
  breeds: [
    {
      id: 235,
      name: 'Spanish Water Dog',
      weight: ' 30 to 50 pounds',
      height: '16 to 20 inches at the shoulder',
      life_span: '12 to 15 years',
      breed_group: 'Sporting',
    },
  ],
  categories: [],
};

describe('UI', () => {
  it('renders correctly', async () => {
    await act(async () => {
      renderer.create(<App />);
    });
  });

  it(`if listView renders correctly `, () => {
    let tree;
    act(() => {
      tree = create(<ListItem item={item} faveStatus={true} />);
    });
    expect(tree.toJSON().children.length).toBe(2);
  });
});
