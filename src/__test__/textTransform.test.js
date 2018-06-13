import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TextTransform from '../components/textTransform.js';

describe('TextTransform component test suite', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<TextTransform />, div);
		ReactDOM.unmountComponentAtNode(div);
	})
	test('shallow smoke test', () => {
		let wrapper = shallow(<TextTransform />);
	})
	it('should not square strings', () => {
        let wrapper = shallow(<TextTransform />);
        let wrappedInput = wrapper.find("input").at(0);
        wrappedInput.simulate("change", {target: {value: "tvåhundrafemtio"}});

        expect(wrapper.state("squared")).toBe("");
    })
    it('should reverse numbers', () => {
        let wrapper = shallow(<TextTransform />);
        let wrappedInput = wrapper.find("input").at(0);
        wrappedInput.simulate("change", {target: {value: "250"}});

        expect(wrapper.state("reversed")).toBe("052");
    })
    it('should reverse strings', () => {
        let wrapper = shallow(<TextTransform />);
        let wrappedInput = wrapper.find("input").at(0);
        wrappedInput.simulate("change", {target: {value: "hello"}});

        expect(wrapper.state("reversed")).toBe("olleh");
    })
    it('should capitalize strings', () => {
        let wrapper = shallow(<TextTransform />);
        let wrappedInput = wrapper.find("input").at(0);
        wrappedInput.simulate("change", {target: {value: "iAmFive"}});

        expect(wrapper.state("capitalized")).toBe("IAMFIVE");
    })
})