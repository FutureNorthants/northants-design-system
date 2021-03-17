
import React from "react";

import { RemoveAllFiltersProps } from "./RemoveAllFilters.types";
import * as Styles from "./RemoveAllFilters.styles";

import {countParams, removeParams} from './../../helpers/url-helpers.js';

// TODO the values are hard coded here :/

const RemoveAllFilters: React.FC<RemoveAllFiltersProps> = ({  }) => {
    
    const count = countParams(['services', 'articleType']);


    const removeAllFilters = (e) => {
        e.preventDefault();
        removeParams(['services', 'articleType', 'page']);
    }

    return (
        <Styles.Container data-testid="RemoveAllFilters" href="#" onClick={removeAllFilters}>Remove all filters{count > 0 && ` (${count})`}</Styles.Container>
    )
};

export default RemoveAllFilters;

