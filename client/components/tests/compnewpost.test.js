import React from "react";
import { shallow, mount, render } from "enzyme";

import CompNewPost from "../CompNewPost";

describe("Test component rendering", function() {	

	const wrapper = shallow(<CompNewPost />);

	it("renders input elements", function() {
		expect(wrapper.find("input").length).toBe(6);
	});

	it("renders label elements", function() {
		expect(wrapper.find("label").length).toBe(4);
	});	
});
