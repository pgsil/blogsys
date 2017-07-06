import React from "react";
import { shallow, mount, render } from "enzyme";

import CompBigBanner from "../CompBigBanner";

describe("Test component init and style props", function() {
	const testImgUrl = "/images/image.jpg";
	const testBgColor = "#ffffff";
	const testBgPos = "center center";
	const testBgSizeOverride = "cover";

  const wrapper = shallow(<CompBigBanner  	imgUrl={testImgUrl} 
											bgColor={testBgColor} 
											bgPos={testBgPos}
											bgSizeOverride={testBgSizeOverride} />);

  it("renders a .big-banner element", function() {
    expect(wrapper.find(".big-banner").length).toBe(1);
  });

  it("properly renders style props", function() {
    expect(wrapper.props().style["background"]).toBe("url(" + testImgUrl + ")");
    expect(wrapper.props().style["backgroundSize"]).toBe(testBgSizeOverride);
    expect(wrapper.props().style["backgroundColor"]).toBe(testBgColor);
    expect(wrapper.props().style["backgroundPosition"]).toBe(testBgPos);
  });

  it("has background repeat set to no-repeat", function() {
    expect(wrapper.props().style["backgroundRepeat"]).toBe("no-repeat");
  });

});