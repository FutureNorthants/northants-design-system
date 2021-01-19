
import React from "react";

import { SearchHeaderProps } from "./SearchHeader.types";
import * as Styles from "./SearchHeader.styles";

const SearchHeader: React.FC<SearchHeaderProps> = () => (
    <Styles.Container data-testid="SearchHeader">
        <Styles.Label for="searchHeader">Search</Styles.Label>
        <Styles.Search type="text" id="searchHeader" name="input-autocomplete" placeholder="Search" />
        <Styles.Button type="submit">Search</Styles.Button>
    </Styles.Container>
);

export default SearchHeader;

