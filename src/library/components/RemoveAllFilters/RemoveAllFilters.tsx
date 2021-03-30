
import React, { useState, useEffect }   from "react";

import { RemoveAllFiltersProps } from "./RemoveAllFilters.types";
import * as Styles from "./RemoveAllFilters.styles";

import {getParamValue, removeParams} from './../../helpers/url-helpers.js';

import { NewsArticleFilterFields } from "./../../structure/NewsArticleFilterAccordion/NewsArticleFilterAccordionText"


const RemoveAllFilters: React.FC<RemoveAllFiltersProps> = ({ count }) => { 

    const [searchValue, setSearchValue] = useState([]);


    useEffect(() => {
        setSearchValue(getParamValue(NewsArticleFilterFields.search.queryParamKey));
    
    }, []);  

    const removeAllFilters = (e) => {
        e.preventDefault();
        removeParams([...NewsArticleFilterFields.removeFiltersList, 'page']);
    }

    return (
        <Styles.Container data-testid="RemoveAllFilters" href="#" onClick={removeAllFilters}>Clear {searchValue.length > 0 && 'search term and '}filters{count > 0 && ` (${count})`}</Styles.Container>
    )
};

export default RemoveAllFilters;

