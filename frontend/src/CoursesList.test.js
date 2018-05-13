import React from 'react';
import ReactDOM from 'react-dom';
import CoursesList from './CoursesList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoursesList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
