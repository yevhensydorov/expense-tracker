import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import AddExpense from "../src/AddExpense";

describe("AddExpense", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<AddExpense />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("AddExpense", () => {
  it("captures change -DESCRIPTION- input and passes it event handler", () => {
    const event = {
      target: {
        name: "description",
        value: "raspberry"
      }
    };
    const handleChange = jest.fn();
    const wrapper = shallow(<AddExpense handleChange={handleChange} />);
    wrapper.find("input.descr-input").simulate("change", event);
    expect(wrapper.state().description).toEqual("raspberry");
  });
});
