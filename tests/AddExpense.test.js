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
        value: "raspberry"
      }
    };
    const handleChange = jest.fn();
    const wrapper = shallow(<AddExpense handleChange={this.handleChange} />);
    // console.log(wrapper.find("input.descr-input").html());
    wrapper.find("input.descr-input").simulate("change", event);
    expect(handleChange.mock.calls).toEqual([["raspberry"]]);
  });
});

// describe("AddExpense", () => {
//   it("captures change -DATE- input and passes it event handler", () => {
//     const event = {
//       target: {
//         value: "2018-11-21"
//       }
//     };
//     const handleChange = jest.fn();
//     const wrapper = shallow(<AddExpense handleChange={handleChange} />);
//     wrapper.find("input.date-input").simulate("change", event);
//     expect(handleChange.mock.calls).toEqual([["2018-11-21"]]);
//   });
// });

// describe("AddExpense", () => {
//   it("captures change -DATE- input and passes it event handler", () => {
//     const event = {
//       target: {
//         value: "5"
//       }
//     };
//     const handleChange = jest.fn();
//     const wrapper = shallow(<AddExpense handleChange={handleChange} />);
//     wrapper.find("input.amount-input").simulate("change", event);
//     expect(handleChange.mock.calls).toEqual([["5"]]);
//   });
// });
