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
	it('Test if List renders state correct', () => {
		let wrapper = shallow(<List />);
		wrapper.setState({
      listOfStrings: [
        {index: 1, string: "första ex"},
        {index: 2, string: "andra ex"},
        {index: 3, string: "tredje ex"},
      ],
      indexCounter: 4,
      newString: ""});
			const trueP = <p>första ex</p>;
			const falseP = <p>fjärde ex</p>;
			expect(wrapper.contains(trueP)).toBe(true)
			expect(wrapper.contains(falseP)).toBe(false)
			expect(wrapper.state("indexCounter")).toBe(4);
	})
	test("Adding a list item", () => {

		let wrapper = shallow(<List />);
		expect(wrapper.state("indexCounter")).toBe(1);

		let wrappedInput = wrapper.find("input").at(0);
		wrappedInput.simulate("change", {target: {value: "hejhej"}});

		let addButton = wrapper.find("button").at(0);
		addButton.simulate("click");
		expect(wrapper.state("indexCounter")).toBe(2);
		const trueP = <p>hejhej</p>;
		const falseP = <p>hejdå</p>;
		expect(wrapper.contains(trueP)).toBe(true);
		expect(wrapper.contains(falseP)).toBe(false);
	})
	test("Remove a list item", () => {
		let wrapper = shallow(<List />);
		wrapper.setState({
      listOfStrings: [
        {index: 1, string: "första ex"},
      ],
      indexCounter: 2,
      newString: ""});

			expect(wrapper.state("listOfStrings").length).toBe(1)

			let removeButton = wrapper.find("button").at(1);
			removeButton.simulate("click");

			expect(wrapper.state("listOfStrings").length).toBe(0)

	})

})