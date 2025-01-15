
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import TableTest2 from "./TableTest2";
import { TableTest2Props } from "./TableTest2.types";

describe("Test Component", () => {
  let props: TableTest2Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(
    <ThemeProvider theme={west_theme}>
      <TableTest2 {...props} />
    </ThemeProvider>
  );

  it("should render foo text correctly", () => {
    props.foo = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TableTest2");

    expect(component).toHaveTextContent("example content");
  });
});
