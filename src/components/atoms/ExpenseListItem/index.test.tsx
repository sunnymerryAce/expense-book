import React from "react";
import ExpenseListItem from "./";
import { shallow } from "enzyme";

describe("<ExpenseListItem />", () => {
  let container: any = null;
  const props = {
    category: "Cafe",
    name: "スタバ",
    amount: 300,
    date: "20200505T123456",
    handleClickItem: jest.fn(),
  };

  beforeEach(() => {
    container = shallow(<ExpenseListItem {...props} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  test("ListItem should have proper props", () => {
    expect(container.find(".ExpenseListItem").props()).toMatchObject({
      onClick: props.handleClickItem,
    });
  });

  test("ListItemText should have proper props", () => {
    expect(
      container.find(".ExpenseListItem-ListItemText").props()
    ).toMatchObject({
      primary: props.category,
      secondary: props.name,
    });
  });

  test("should show proper amount", () => {
    expect(container.find(".ExpenseListItem-amount").text()).toBe(
      `¥${props.amount}`
    );
  });

  test("click event handler should be triggered", () => {
    container.find(".ExpenseListItem").simulate("click");
    expect(props.handleClickItem).toBeCalled();
  });
});
