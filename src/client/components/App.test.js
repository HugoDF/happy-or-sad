import test from 'ava';
import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import sinon from 'sinon';

process.env.NODE_ENV = 'production';

test('App should render without crashing', (t) => {
  const app = shallow(<App />);
  t.is(app.find('.App').length, 1);
});

test('App should render a form with a textarea and a submit button', (t) => {
  const app = shallow(<App />);
  const hasForm = app.find('form').length === 1;
  const hasTextarea = app.find('textarea').length === 1;
  const hasSubmit = app.find('[type="submit"]').length === 1;
  t.true(hasForm);
  t.true(hasTextarea);
  t.true(hasSubmit);
});

test('App should contain a StatusOverlay component', (t) => {
  const app = shallow(<App />);
  t.is(app.find('StatusOverlay').length, 1);
});

test('App should have passed mood prop in className', (t) => {
  const app = shallow(<App mood={'someMood'}/>);
  t.is(app.find('.someMood').length, 1);
});

test('App#handleTextChange should prevent default, and call \'updateText\' prop with new value', (t) => {
  const mockUpdateText = sinon.stub();
  const value = 'newText';
  const mockEvent = {
    preventDefault: sinon.stub(),
    target: { value }
  };
  const app = new App({ updateText: mockUpdateText });
  app.handleTextChange(mockEvent);

  t.true(mockUpdateText.calledWith(value));
  t.true(mockEvent.preventDefault.calledOnce);
});

test('App#submitForm should call \'analyseMood\' passed as prop with text passed as prop', (t) => {
  const mockAnalyseMood = sinon.stub();
  const text = 'someText';
  const app = new App({ analyseMood: mockAnalyseMood, text });
  app.submitForm();
  t.true(mockAnalyseMood.calledWith(text));
});

test('App#handleSubmit should call App#submitForm and preventDefault on event', (t) => {
  const mockEvent = { preventDefault: sinon.stub() };
  const mockSubmitForm = sinon.stub();
  const app = new App;
  app.submitForm = mockSubmitForm;
  app.handleSubmit(mockEvent);

  t.true(mockEvent.preventDefault.calledOnce);
  t.true(app.submitForm.calledOnce);
});

test('App#handleKeyDown should return null if the keys pressed isn\'t SHIFT + ENTER', (t) => {
  const mockEvent = {};
  const app = new App;
  t.is(app.handleKeyDown(mockEvent), null);
});

test('App#handleKeyDown should call if the keys pressed isn\'t SHIFT + ENTER', (t) => {
  const mockEvent = {
    keyCode: 13,
    metaKey: true
  };
  const app = new App;
  app.submitForm = sinon.stub();
  app.handleKeyDown(mockEvent);

  t.true(app.submitForm.calledOnce);
});
