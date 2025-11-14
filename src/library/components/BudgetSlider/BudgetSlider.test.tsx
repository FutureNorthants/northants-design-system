
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import BudgetSlider from "./BudgetSlider";
import { BudgetSliderProps } from "./BudgetSlider.types";

describe("Test Component", () => {
  let props: BudgetSliderProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(
    <ThemeProvider theme={west_theme}>
      <BudgetSlider {...props} />
    </ThemeProvider>
  );

  it("should render foo text correctly", () => {
    props.foo = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("BudgetSlider");

    expect(component).toHaveTextContent("example content");
  });
});
