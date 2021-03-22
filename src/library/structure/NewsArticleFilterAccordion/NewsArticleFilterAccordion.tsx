
import React, { useState, useEffect } from "react";
import { NewsArticleFilterAccordionProps } from "./NewsArticleFilterAccordion.types";
import * as Styles from "./NewsArticleFilterAccordion.styles";
import Accordion from "../../slices/Accordion/Accordion";
import RemoveAllFilters from "../../components/RemoveAllFilters/RemoveAllFilters";
import Heading from "../../components/Heading/Heading";

import {countParams} from './../../helpers/url-helpers.js';

const NewsArticleFilterAccordion: React.FC<NewsArticleFilterAccordionProps> = ({ sections }) => { 

const [count, setCount] = useState(0);

useEffect(() => {
    setCount(countParams(['searchTerm', 'services', 'articleType', 'sortBy']));
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
sections.map((section) => section.isExpanded = false );

    
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
                <RemoveAllFilters />
            }
        </Styles.Filters>

    </Styles.Container>
);

}

export default NewsArticleFilterAccordion;
