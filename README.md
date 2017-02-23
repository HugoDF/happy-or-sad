# Happy or Sad

Implementation of the Happy or Sad App for Technology Will Save Use using React, Redux and Express.

As suggested, Dan Abramov's [`react-hot-boilerplate` v2](https://github.com/gaearon/react-hot-boilerplate) is used as a starting point (includes webpack config and a dev express server).

The dependencies have been updated since this project is not maintained any more.

## Setup

You need Node v6 as minimum to run this project (ES6 features are used without transpilation in the API server). Ideally use [Yarn](https://yarnpkg.com) so that you get locked dependencies.

To run the project, make sure all the dependencies are installed using `npm install` or `yarn install`. Then run `npm start` or `yarnpkg start`.

To run the project in livereload mode use `npm run dev` or `yarnpkg run dev`.

To run the tests use `npm test` or `yarn test`. If you would like more verbose output use `npm test -- --verbose` or `yarn test -- --verbose`.  
You can use AVA (test runner) in watch mode by passing it the `-w` flag (which gives `npm test -- -w` or `yarn test -- -w`).

## Structure

In the `src` directory you will find the `api` and `client` directories. They contain the API app to rate whether text is happy or sad and the React frontend app respectively.

The tests are colocated with the application code and are named `fileContainingCodeBeingTested.test.js` following the AVA default blob (`**/*.test.js`).

## Technologies

[Redux](http://redux.js.org/) is used to managed state in the React app. Although it would have been possible to do everything through component state (and `setState`), 
using Redux allows us to test the React components more easily (since we leverage props).

As an HTTP client, we use [axios](https://github.com/mzabriskie/axios) which is a promise-based client that works both with Node and in the browser.

On the backend, we use a simple Express API server that has a single POST `rateMood` endpoint.
It is served as a separate HTTP server and therefore has CORS enabled.

For testing we use [AVA](https://github.com/avajs/ava), for its low config and watch system and [Enzyme](https://github.com/airbnb/enzyme) to test React components.
We use [sinon](http://sinonjs.org/) for function stubbing.

In terms of development environment, we leverage [node-dev](https://github.com/fgnass/node-dev) to livereload the API server (and webpack dev server) when code changes.
