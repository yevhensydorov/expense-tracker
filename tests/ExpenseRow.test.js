import React from "react";
import ExpenseRow from "../src/ExpenseRow";
import renderer from "react-test-renderer";

const dummyExpenses = [
  { description: "cheese", date: "2017-11-30", amount: "3243" },
  { description: "wine", date: "2018-11-21", amount: "32" },
  { description: "strawberry", date: "2018-12-05", amount: "3" }
];

describe("ExpenseRow", () => {
  it("matches the snapshot", () => {
    const tree = renderer
      .create(<ExpenseRow expense={dummyExpenses} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
