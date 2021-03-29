
import React  from "react";

import { RemoveAllFiltersProps } from "./RemoveAllFilters.types";
import * as Styles from "./RemoveAllFilters.styles";

import {countParams, removeParams} from './../../helpers/url-helpers.js';

import { NewsArticleFilterFields } from "./../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordionText"


const RemoveAllFilters: React.FC<RemoveAllFiltersProps> = ({ count }) => { 


    const removeAllFilters = (e) => {
        e.preventDefault();
        removeParams([NewsArticleFilterFields.search.queryParamKey, NewsArticleFilterFields.services.queryParamKey, NewsArticleFilterFields.articleType.queryParamKey, 'page']);
    }

    return (
        <Styles.Container data-testid="RemoveAllFilters" href="#" onClick={removeAllFilters}>Remove all filters{count > 0 && ` (${count})`}</Styles.Container>
    )
};

export default RemoveAllFilters;

