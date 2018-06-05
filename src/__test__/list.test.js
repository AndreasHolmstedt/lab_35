import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import List from '../components/list.js';


describe('list component test suite', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<List />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
	test('shallow smoke test', () => {
		let wrapper = shallow(<List />);
	})

})
