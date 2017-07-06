import React from "react";
import { shallow, mount, render } from "enzyme";

import CompPostsPost from "../CompPostsPost";

describe("Test component init", function() {	  

  it("renders a .CompPost and its elements", function() {
  	const wrapper = shallow(<CompPostsPost type={false} body="aaaa" />);

    expect(wrapper.find(".CompPost").length).toBe(1);    
    expect(wrapper.find(".CompPost-title").length).toBe(1);
    expect(wrapper.find(".CompPost-subtitle").length).toBe(1);
    expect(wrapper.find(".CompPost-subtitle2").length).toBe(1);
    expect(wrapper.find(".CompPost-spacer").length).toBe(1);
    expect(wrapper.find(".CompPost-body").length).toBe(1);
  });

  it("renders a .CompPost element with the right props", function() {

  	const wrapper = shallow(<CompPostsPost 
  										key="post-test"
  										type={false}
  										title="Test Title"
  										imgurl="/image/image.jpg"
  										subtitle="Test Subtitle"
  										subtitle2="Test Subtitle2"
  										body="This is the test body" />);

    expect(wrapper.find(".CompPost").length).toBe(1);  

    /*test shallow component's key*/
    expect(wrapper.unrendered.key).toBe("post-test");

    /*instance of the component being rendered as the root node passed into shallow*/
    let inst = wrapper.instance();
    /*component receiving the correct props?*/
    expect(inst.props["title"]).toBe("Test Title");
    expect(inst.props["subtitle"]).toBe("Test Subtitle");
    expect(inst.props["imgurl"]).toBe("/image/image.jpg");
    expect(inst.props["subtitle2"]).toBe("Test Subtitle2");
    expect(inst.props["body"]).toBe("This is the test body");

    expect(inst.props["type"]).toBe(false);
  });

  it("renders a .CompPostFeatured if type=true", function() {
  	const wrapper = shallow(<CompPostsPost type={true} body="aaaa" />);

    expect(wrapper.find(".CompPostFeatured").length).toBe(1);    
  });

});