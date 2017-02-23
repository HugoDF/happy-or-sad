const test = require('ava');
const rateMood = require('./rateMood');

test('rateMood should return \'happy\' if more than 50% more happy words than sad words', (t) => {
  const mood = rateMood('I was glad to go to the beach. Very glad. Even though it was a miserable day.');
  t.is(mood, 'happy');
});

test('rateMood should return \'sad\' if more than 50% more sad words than happy words', (t) => {
  const mood = rateMood('I was sad to go to the beach. Very sad. Even though it was a pleasant day.');
  t.is(mood, 'sad');
});

test('rateMood should return \'unknown\' if no happy or sad words', (t) => {
  const mood = rateMood('I was going to the beach. Very quickly. It was that type of day.');
  t.is(mood, 'unknown');
});

test('rateMood should return \'unknown\' if same amount of happy and sad words', (t) => {
  const mood = rateMood('I was going to the beach. Very sad. Even though it was a pleasant day.');
  t.is(mood, 'unknown');
});
