import React from 'react';
import ReactDOM from 'react-dom';
import {
  fireEvent,
} from 'react-testing-library';
import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('add an expand button only if enableExpand is true', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  expect(div.querySelector('button')).toBeNull();
  ReactDOM.unmountComponentAtNode(div);
  ReactDOM.render((
    <Card
      heading="test"
      enableExpand
    />
  ), div);
  expect(div.querySelector('button')).not.toBeNull();
  ReactDOM.unmountComponentAtNode(div);
});
it('expand the Card clicking on the expand button', () => {
  const div = document.createElement('div');
  // necessario per testare il portal
  document.body.append(div);
  ReactDOM.render((
    <Card
      heading="test"
      enableExpand
    />
  ), div);
  const childrenBeforeClick = document.body.childNodes.length;
  expect(childrenBeforeClick).toBe(1);
  fireEvent.click(div.querySelector('button'));
  expect(document.body.childNodes.length).toBe(childrenBeforeClick + 1);
  expect(document.querySelector('.ExpandedRoot')).not.toBeNull();
  expect(document.querySelector('.ExpandedCard')).not.toBeNull();
  ReactDOM.unmountComponentAtNode(div);
});
it('call onExpand at the start of the expand animation', () => {
  const onExpand = jest.fn();
  const div = document.createElement('div');
  // necessario per testare il portal
  document.body.append(div);
  ReactDOM.render((
    <Card
      heading="test"
      enableExpand
      onExpand={onExpand}
    />
  ), div);
  fireEvent.click(div.querySelector('button'));
  expect(onExpand).toHaveBeenCalled();
  ReactDOM.unmountComponentAtNode(div);
});
it('call onExpanded at the end of the expand animation', async () => {
  const onExpanded = jest.fn();
  const div = document.createElement('div');
  // necessario per testare il portal
  document.body.append(div);
  ReactDOM.render((
    <Card
      heading="test"
      enableExpand
      onExpanded={onExpanded}
    />
  ), div);
  fireEvent.click(div.querySelector('button'));
  fireEvent.animationEnd(document.querySelector('.ExpandedRoot .Heading'));
  expect(onExpanded).toHaveBeenCalled();
  ReactDOM.unmountComponentAtNode(div);
});
