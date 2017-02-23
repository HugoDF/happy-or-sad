import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import StatusOverlay from './StatusOverlay';

test('StatusOverlay should render without crashing', (t) => {
  const comp = shallow(<StatusOverlay />);
});

test('StatusOverlay should return null as root node if not passed \'isLoading\' and \'error\'', (t) => {
  const comp = shallow(<StatusOverlay />);
  t.is(comp.node, null);
});

test('StatusOverlay should return a div that contains \'Loading\' as root node if passed \'isLoading\' and no \'error\'', (t) => {
  const comp = shallow(<StatusOverlay isLoading={true}/>);
  t.is(comp.find('.status-overlay-inner').text(), 'Loading');
});

test('StatusOverlay should return a div that contains an error message as root node if passed \'error\' and no \'isLoading\'', (t) => {
  const comp = shallow(<StatusOverlay error={{}}/>);
  t.is(comp.find('.status-overlay-inner').length, 1);
});
