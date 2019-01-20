
import React from "react";
import { shallow } from "enzyme";
import Header from "../components/ui/header";

describe("Comment test suite", () => {
  let wrapper;
  const props = {
    
  };

  function renderShallow() {
    wrapper = shallow(<Header commentData={props} />);
  }

  it("<Header/> should render with props(snapshot)", () => {
    renderShallow();
    expect(wrapper).toMatchSnapshot();
  });

  it("<Header/> should render with state top as seelcted", () => {
    renderShallow();
    wrapper.setState({
        selectedTab :"top"
    })

    expect(wrapper).toMatchSnapshot();
  });
  it("<Header/> should render with state new as seelcted", () => {
    renderShallow();
    wrapper.setState({
        selectedTab :"new"
    })

    expect(wrapper).toMatchSnapshot();
  });

  it("<Header/> should change the state of class", () => {
    renderShallow();
    let instance = wrapper.instance();
    spyOn(instance, 'linkHighlight').and.callThrough();
    instance.linkHighlight('new');
    expect(instance.state.selectedTab).toBe('new');
  });

  it("<Header/> click on Home Logo should chenge class to blank", () => {
    renderShallow();
    let instance = wrapper.instance()
    wrapper.find('Link').first().simulate('click');
    expect(instance.state.selectedTab).toBe('');
  });
  it("<Header/> click on Home Logo should chenge class to new", () => {
    renderShallow();
    let instance = wrapper.instance()
    const arr = wrapper.find('Link')
    arr.at(1).simulate('click');
    expect(instance.state.selectedTab).toBe('top');
  });
  it("<Header/> click on Home Logo should chenge class to top", () => {
    renderShallow();
    let instance = wrapper.instance()
    wrapper.find('Link').last().simulate('click');
    expect(instance.state.selectedTab).toBe('new');
  });

 
});
