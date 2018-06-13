import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Counter from '../components/counter.js';

describe('Counter component test suite', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Counter />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
	test('shallow smoke test', () => {
		let wrapper = shallow(<Counter />);
	})
	it('should increment the value', () => {
        let wrapper = shallow(<Counter />);
        wrapper.setState({ value: 0 });
        let incrementButton = wrapper.find("button").at(0);
        incrementButton.simulate("click");

        expect(wrapper.state("value")).toBe(1);
    })
    it('should decrement the value', () => {
        let wrapper = shallow(<Counter />);
        wrapper.setState({ value: 0 });
        let decrementButton = wrapper.find("button").at(1);
        decrementButton.simulate("click");

        expect(wrapper.state("value")).toBe(-1);
    })
    it('should change value to 250', () => {
        let wrapper = shallow(<Counter />);
        wrapper.setState({ value: 0 });
        let wrappedInput = wrapper.find("input").at(0);
		wrappedInput.simulate("change", {target: {value: "250"}});

        expect(wrapper.state("value")).toBe(250);
    })
    it('should not change the value', () => {
        let wrapper = shallow(<Counter />);
        wrapper.setState({ value: 0 });
        let wrappedInput = wrapper.find("input").at(0);
		wrappedInput.simulate("change", {target: {value: "tvåhundrafemtio"}});

        expect(wrapper.state("value")).toBe(0);
	})
})