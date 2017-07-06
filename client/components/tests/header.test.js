import React from "react";
import { shallow, mount, render } from "enzyme";

import CompHeader from "../CompHeader";

describe("Test component rendering", function() {	

	const wrapper = shallow(<CompHeader />);

	it("renders a .header-master element", function() {
		expect(wrapper.find(".header-master").length).toBe(1);
	});

	it("renders a .pushy-container element", function() {
		expect(wrapper.find("#pushy-container").exists()).toBe(true);
	});

	it("renders a .desktopheader element", function() {
		expect(wrapper.find(".desktopheader").exists()).toBe(true);
	});

	it("renders a .pushy-left element", function() {
		expect(wrapper.find(".pushy-left").exists()).toBe(true);
	});
});