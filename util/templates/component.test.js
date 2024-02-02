module.exports = (componentName) => ({
  content: `
import React from "react";
import { render } from "@testing-library/react";
import { west_theme } from '../../../themes/theme_generator';
import { ThemeProvider } from 'styled-components';

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test Component", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => 
    render(
      <ThemeProvider theme={west_theme}>
        <${componentName} {...props} />
      </ThemeProvider>
    );

  it("should render foo text correctly", () => {
    props.foo = "example content";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${componentName}");

    expect(component).toHaveTextContent("example content");
  });
});
`,
  extension: `.test.tsx`,
});
