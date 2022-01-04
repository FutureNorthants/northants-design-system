import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  queryByText,
  getByText,
  getByRole,
} from "@testing-library/react";
import Accordion from "./Accordion";
import { AccordionProps } from "./Accordion.types";
import { ThemeProvider } from "styled-components";
import { west_theme } from "../../../themes/theme_generator";
import { Divider } from "../Divider/Divider.styles";

describe("Accordion with single section", () => {
  let component: HTMLElement;

  let props: AccordionProps = {
    sections: [
      {
        title: "Section one",
        content: "Section 1 content",
        isExpanded: false,
        sectionId: "firstSection",
        summary: "Section 1 summary text",
      },
    ],
    withReadMore: true,
  };

  beforeEach(() => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Accordion {...props} />
        </ThemeProvider>
      );

    const { getByTestId } = renderComponent();
    component = getByTestId("Accordion");
  });

  it("should display the summary text", () => {
    expect(component).toHaveTextContent("Section 1 summary text");
    expect(getByText(component, "Section 1 content")).not.toBeVisible();
  });

  it("should open Section 1 when clicking on the title", () => {
    expect(getByText(component, "Section 1 content")).not.toBeVisible();

    fireEvent.click(getByText(component, "Section one"));

    expect(getByText(component, "Section 1 content")).toBeVisible();
  });

  it("should close Section 1 content when clicking on the title again", () => {
    expect(getByText(component, "Section 1 content")).toBeVisible();

    fireEvent.click(getByText(component, "Section one"));

    expect(getByText(component, "Section 1 content")).not.toBeVisible();
  });

  it("should open Section 1 when clicking Read more", async () => {
    expect(getByText(component, "Section 1 content")).not.toBeVisible();

    fireEvent.click(getByText(component, "Read more"));

    await waitFor(() => {
      expect(queryByText(component, "Read more")).not.toBeInTheDocument();
      expect(getByText(component, "Section 1 content")).toBeVisible();
    });
  });

  it("should close Section 1 when clicking Show less", async () => {
    expect(getByText(component, "Section 1 content")).toBeVisible();

    fireEvent.click(getByText(component, "Show less"));

    await waitFor(() => {
      expect(queryByText(component, "Show less")).not.toBeInTheDocument();
      expect(getByText(component, "Section 1 content")).not.toBeVisible();
    });
  });
});

describe("Accordion with multiple sections and Section one expanded", () => {
  let component: HTMLElement;

  let props: AccordionProps = {
    sections: [
      {
        title: "Section one",
        content: "Section 1 content",
        isExpanded: true,
        sectionId: "firstSection",
      },
      {
        title: "Section two",
        content: "Section 2 content",
        isExpanded: false,
        sectionId: "secondSection",
      },
    ],
  };

  beforeEach(() => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Accordion {...props} />
        </ThemeProvider>
      );

    const { getByTestId } = renderComponent();
    component = getByTestId("Accordion");
  });

  it("should display the accordion sections", () => {
    expect(component).toBeVisible();
    expect(component).toHaveTextContent("Section one");
    expect(component).toHaveTextContent("Section two");
  });

  it("should expand Section 1 by default", () => {
    expect(getByText(component, "Section 1 content")).toBeVisible();
    expect(getByText(component, "Section 2 content")).not.toBeVisible();
  });

  it("should close all when Close all is pressed", () => {
    const closeAll: HTMLElement = getByText(component, "Close all");

    fireEvent.click(closeAll);

    expect(getByText(component, "Section 1 content")).not.toBeVisible();
    expect(getByText(component, "Section 2 content")).not.toBeVisible();
  });

  it("should expand all when Open all is pressed", () => {
    const openAll: HTMLElement = getByText(component, "Open all");

    fireEvent.click(openAll);

    expect(getByText(component, "Section 1 content")).toBeVisible();
    expect(getByText(component, "Section 2 content")).toBeVisible();
  });
});

describe("Accordion with divider slice", () => {
  let component: HTMLElement;

  let props: AccordionProps = {
    sections: [
      {
        title: "Section one",
        content: (
          <>
            <p>This is a paragraph</p>
            <Divider />
            <p>This is a second paragraph</p>
          </>
        ),
        isExpanded: true,
        sectionId: "firstSection",
      },
    ],
    withReadMore: false,
  };

  beforeEach(() => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Accordion {...props} />
        </ThemeProvider>
      );

    const { getByTestId } = renderComponent();
    component = getByTestId("Accordion");
  });

  it("should display the divider as a hr", () => {
    expect(getByText(component, "This is a paragraph")).toBeVisible();
    expect(getByRole(component, "separator")).toBeVisible();
    expect(getByText(component, "This is a second paragraph")).toBeVisible();
  });

  it("should not display Read more", async () => {
    await waitFor(() => {
      expect(queryByText(component, "Read more")).not.toBeInTheDocument();
    });
  });
});
