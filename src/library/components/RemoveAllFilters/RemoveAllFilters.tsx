
import React from "react";

import { RemoveAllFiltersProps } from "./RemoveAllFilters.types";
import * as Styles from "./RemoveAllFilters.styles";

import {removeParams} from './../../helpers/url-helpers.js';

// TODO the values are hard coded here :/

const RemoveAllFilters: React.FC<RemoveAllFiltersProps> = ({  }) => {
    
    const removeAllFilters = (e) => {
        e.preventDefault();
        removeParams(['searchTerm', 'services', 'articleType', 'sortBy', 'page']);
    }

    return (
        <Styles.Container data-testid="RemoveAllFilters" href="#" onClick={removeAllFilters}>Remove all filters</Styles.Container>
    )
};

export default RemoveAllFilters;

