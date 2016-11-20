const React = require('react');
const ReactDOM = require('react-dom');

const DumbComponent = require('./components/DumbComponent');
const DumberComponent = require('./components/DumberComponent');

function foo(){
  alert('hi')
}

ReactDOM.render(
  <div>
    <DumbComponent />
    <DumberComponent handleClick={foo} />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // leave this in!
