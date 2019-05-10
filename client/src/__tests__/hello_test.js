import React from 'react';
import Hello from '../hello';
import renderer from 'react-test-renderer';



test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Hello/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});