
import React from "react";

import { NewsArticleFilterAccordionProps } from "./NewsArticleFilterAccordion.types";
import * as Styles from "./NewsArticleFilterAccordion.styles";
import Accordion from "../../slices/Accordion/Accordion";

const NewsArticleFilterAccordion: React.FC<NewsArticleFilterAccordionProps> = ({ sections }) => (
    <Styles.Container data-testid="NewsArticleFilterAccordion">
        <Accordion isFilter={true} sections={sections} />
    </Styles.Container>
);

export default NewsArticleFilterAccordion;
