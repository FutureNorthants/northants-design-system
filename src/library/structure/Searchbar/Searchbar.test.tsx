import React from "react";
import {
  render,
  fireEvent,
  getByPlaceholderText,
  getByRole,
  getByTestId,
  waitFor,
  queryByText,
} from "@testing-library/react";
import Searchbar from "./Searchbar";
import { SearchbarProps } from "./Searchbar.types";
import { ThemeProvider } from "styled-components";
import { west_theme } from "../../../themes/theme_generator";

describe("Searchbar", () => {
  let component: HTMLElement;
  let searchInput: HTMLElement;
  let searchButton: HTMLElement;

  let props: SearchbarProps = {
    suggestions: ["red", "reddish", "blue", "green", "orange", "grey", "black"],
    placeholder: "Enter search text",
    minimumMatchLength: 2,
  };

  beforeEach(() => {
    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <Searchbar {...props} />
        </ThemeProvider>
      );

    const { getByTestId, getByPlaceholderText } = renderComponent();
    component = getByTestId("Searchbar");
    searchInput = getByPlaceholderText("Enter search text");
    searchButton = getByTestId("SearchButton");
  });

  it("should display the search bar", () => {
    expect(component).toBeVisible();
  });

  it("should display the 4 matching results in suggestions", () => {
    fireEvent.change(searchInput, { target: { value: "re" } });
    const listbox: HTMLElement = getByRole(component, "listbox");

    expect(listbox).toBeVisible();
    expect(listbox.children.length).toBe(4);
  });

  it("should display the single matching result in suggestions", () => {
    fireEvent.change(searchInput, { target: { value: "blue" } });
    const listbox: HTMLElement = getByRole(component, "listbox");

    expect(listbox.children.length).toBe(1);
  });

  it("should display the error state when no search term provided", () => {
    fireEvent.click(searchButton);

    expect(searchInput).toHaveStyle(
      `border: solid ${west_theme.theme_vars.colours.negative}`
    );
  });

  it("should clear the error state when the user enters a search term", async () => {
    fireEvent.click(searchButton);

    expect(searchInput).toHaveStyle(
      `border: solid ${west_theme.theme_vars.colours.negative}`
    );

    fireEvent.change(searchInput, { target: { value: "b" } });

    expect(searchInput).toHaveStyle("border: solid #000000");
  });
});
