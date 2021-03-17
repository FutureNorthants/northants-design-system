
import React from "react";

import { NewsArticleListHeaderProps } from "./NewsArticleListHeader.types";
import * as Styles from "./NewsArticleListHeader.styles";
import SortBy from "../../components/SortBy/SortBy";
import {countParams, getCheckboxValues, getDropDownValues, deSlug, removeValueFromParam} from './../../helpers/url-helpers.js';
import RemovableTag from "../../components/RemovableTag/RemovableTag";


const NewsArticleListHeader: React.FC<NewsArticleListHeaderProps> = ({ totalResults, sortBy, sortByOptions }) => {
    
    
    const count = countParams(['searchTerm', 'services', 'articleType', 'sortBy']);    
    // const searchTermVals = getParamValues('searchTerm');
    const servicesVals = getDropDownValues('services');
    const articleTypeVals = getCheckboxValues('articleType');
    // const sortByVal = getParamValues('sortBy');
           
    const removeFilterValue = (param, value) => {
        removeValueFromParam(param, value);
    }

return (
    <Styles.Container data-testid="NewsArticleListHeader">
        <Styles.LeftCol>{totalResults} articles</Styles.LeftCol>
        <Styles.RightCol><SortBy selected={sortBy} options={sortByOptions} /></Styles.RightCol>
        {count > 0 && 
        <Styles.Filters>
            {servicesVals.length > 0 &&
                <Styles.FilterRow>
                <Styles.FilterTitle>Services shown:</Styles.FilterTitle>
                {servicesVals.map((service, i) => <RemovableTag key={i}clickHandler={() => removeFilterValue('services', service)} index={i} label={deSlug(service)} value={service} /> )}
                </Styles.FilterRow>
            }

            {articleTypeVals.length > 0 &&
                <Styles.FilterRow>
                <Styles.FilterTitle>Article type{articleTypeVals.length > 1 && `(s)`} shown: </Styles.FilterTitle>
                {articleTypeVals.map((article, i) => <RemovableTag key={i} clickHandler={() => removeFilterValue('articleType', article)}  index={i} preposition="and" label={deSlug(article)} value={article} /> )}
                </Styles.FilterRow>
            }
        </Styles.Filters>
        }
    </Styles.Container>
);
}

export default NewsArticleListHeader;

