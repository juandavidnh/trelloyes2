import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List cards={[{id:10, title:'your mom', content:"don't you cry tonight"}, {id:9, title:'your mom', content:"don't you cry tonight"}]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List cards={[{id:10, title:'your mom', content:"don't you cry tonight"},{id:9, title:'your mom', content:"don't you cry tonight"}]} header="this list" />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
});
