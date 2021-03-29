
import React, { useState, useEffect } from "react";
import { NewsArticleFilterAccordionProps } from "./NewsArticleFilterAccordion.types";
import * as Styles from "./NewsArticleFilterAccordion.styles";
import Accordion from "../../slices/Accordion/Accordion";
import RemoveAllFilters from "../../components/RemoveAllFilters/RemoveAllFilters";
import { NewsArticleFilterFields } from "./NewsArticleFilterAccordionText"

import {countParams, getParamValue, getDropDownValues, getCheckboxValues} from './../../helpers/url-helpers.js';

const NewsArticleFilterAccordion: React.FC<NewsArticleFilterAccordionProps> = ({ sections }) => { 

const [count, setCount] = useState(0);
const [searchValue, setSearchValue] = useState([]);
const [servicesValue, setServices] = useState([]);
const [articleTypeValue, setArticleTypes] = useState([]);


useEffect(() => {
    setCount(countParams([NewsArticleFilterFields.search.queryParamKey, NewsArticleFilterFields.services.queryParamKey, NewsArticleFilterFields.articleType.queryParamKey, NewsArticleFilterFields.sortBy.queryParamKey]));
    setSearchValue(getParamValue(NewsArticleFilterFields.search.queryParamKey));
    setServices(getDropDownValues(NewsArticleFilterFields.services.queryParamKey));
    setArticleTypes(getCheckboxValues(NewsArticleFilterFields.articleType.queryParamKey));
}, []);   

const [isFullScreen, setFullScreen] = useState(false)
    
const showFullscreenFilters = (e) => {
    setFullScreen(true)
    document.body.style.overflow = 'hidden';
}


const hideFullscreenFilters = (e) => {
    setFullScreen(false)
    document.body.style.overflow = 'visible';
}

// set accordions to closed by default NOR-134
sections.map((section) => {
    // unless the field in question is set
    // search
    // services
    // article type

    if(section.title === NewsArticleFilterFields.search.title && searchValue.length > 0) {
        section.isExpanded = true;
    }
    else if(section.title === NewsArticleFilterFields.services.title && servicesValue.length > 0) {
        section.isExpanded = true;
    }
    else if(section.title === NewsArticleFilterFields.articleType.title && articleTypeValue.length > 0) {
        section.isExpanded = true;
    }
    else {
        section.isExpanded = false 
    }

});



    
return (
    <Styles.Container data-testid="NewsArticleFilterAccordion">
        <Styles.ShowFiltersButton onClick={showFullscreenFilters} aria-expanded={!!isFullScreen} aria-controls={`PageFilters`} >Show Search &amp; Filters{count > 0 && ` (${count})`}</Styles.ShowFiltersButton>

        <Styles.Filters isFullScreen={isFullScreen} id="PageFilters" aria-labelledby="PageFiltersLabel">
            <Styles.FilterHeader>
                <Styles.FilterHeading id="PageFiltersLabel">Search &amp; Filters</Styles.FilterHeading>
                <Styles.ShowFiltersButton onClick={hideFullscreenFilters}>Close window</Styles.ShowFiltersButton> 
            </Styles.FilterHeader>
            <Accordion isFilter={true} sections={sections} withReadMore={false} />
            {count > 0 && 
                <RemoveAllFilters count={count} />
            }
        </Styles.Filters>

    </Styles.Container>
);

}

export default NewsArticleFilterAccordion;
