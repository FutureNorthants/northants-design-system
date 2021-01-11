
import React from "react";
import { AccordionSectionProps } from "./Accordion.types";
import * as Styles from "./Accordion.styles";


const AccordionSection: React.FC<AccordionSectionProps> = ({ title, content, summary, isExpanded, accordionSectionId, onToggle }) => {
    const onSectionToggle = () => (isExpanded === true) ? onToggle(accordionSectionId, false) : onToggle(accordionSectionId, true);
    return (
            <Styles.Section  className={isExpanded && "accordion__section--expanded"}>
                <Styles.SectionHeader onClick={onSectionToggle}>
                    
                    <Styles.SectionHeading>
                        <Styles.SectionButton type="button" id={`${accordionSectionId}-heading`} aria-controls={`${accordionSectionId}-content`} aria-expanded={isExpanded ? "true" : "false"}>
                          {title}
                          <Styles.AccordionIcon aria-hidden="true"></Styles.AccordionIcon>
                        </Styles.SectionButton>
                    </Styles.SectionHeading>

                    {summary && <Styles.SectionSummary id={`${accordionSectionId}-summary`}>
                        {summary}
                    </Styles.SectionSummary>
                    }
                </Styles.SectionHeader>
                <Styles.SectionContent id={`${accordionSectionId}-content`} aria-labelledby={`${accordionSectionId}-heading`}>
                    {content}
                </Styles.SectionContent>
            </Styles.Section>
    );
};

export default AccordionSection;

