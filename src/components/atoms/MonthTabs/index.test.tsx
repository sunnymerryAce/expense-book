import React from "react";
import MonthTabs from "./";
import { shallow } from "enzyme";

describe("<MonthTabs />", () => {
  let container: any = null;
  const props = {
    months: [
      "202003",
      "20200401T000000",
      "20200501T000000",
      "20200601T000000",
      "Wed Jul 01 2020",
    ],
    currentIndex: 0,
    handleChange: jest.fn(),
  };

  beforeEach(() => {
    container = shallow(<MonthTabs {...props} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  test("event handler should be triggered", () => {
    container
      .find(".MonthTabs-Tabs")
      .simulate("change", { target: { value: "" } });
    expect(props.handleChange).toBeCalled();
  });
});
