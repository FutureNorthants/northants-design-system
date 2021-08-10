
import React from "react";
import { AccordionSectionProps } from "./Accordion.types";
import * as Styles from "./Accordion.styles";
import { uniqueID } from './../../helpers/helpers'; 

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, content, summary, isExpanded, accordionSectionId, onToggle, isFilter = false, withReadMore, sectionId = false }) => {
    const onSectionToggle = () => (isExpanded === true) ? onToggle(accordionSectionId, false) : onToggle(accordionSectionId, true);
    const thisSectionId = (sectionId === false) ? `accordion_section${uniqueID()}` : sectionId ;
    return (
            <Styles.Section id={thisSectionId} className={isExpanded && "accordion__section--expanded"}>
                <Styles.SectionHeader onClick={onSectionToggle}>
                    
                    <Styles.SectionHeading as={isFilter ? "h3" : "h2"}>
                        <Styles.SectionButton title={isExpanded ? "Minimise "+ title : title} isFilter={isFilter} type="button" id={`${thisSectionId}_${accordionSectionId}-heading`} aria-controls={`${thisSectionId}_${accordionSectionId}-content`} aria-expanded={isExpanded ? "true" : "false"}>
                          {title}
                          <Styles.AccordionIcon aria-hidden="true"></Styles.AccordionIcon>
                        </Styles.SectionButton>
                    </Styles.SectionHeading>

                    {summary && 
                        <Styles.SectionSummary id={`${thisSectionId}_${accordionSectionId}-summary`}>
                            {summary}
                        </Styles.SectionSummary>
                    }
                    {!isExpanded && withReadMore && 
                        <Styles.ReadMore title={"Read more about " + title}>Read more</Styles.ReadMore>
                    }
                </Styles.SectionHeader>
                <Styles.SectionContent id={`${thisSectionId}_${accordionSectionId}-content`} aria-labelledby={`${thisSectionId}_${accordionSectionId}-heading`}>
                    {content}
                    {isExpanded && withReadMore && 
                        <Styles.ShowLessButton onClick={onSectionToggle}>Show less</Styles.ShowLessButton>
                    }
                </Styles.SectionContent>
                
            </Styles.Section>
    );
};

export default AccordionSection;