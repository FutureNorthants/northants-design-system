
import React from "react";
import { AccordionSectionProps } from "./Accordion.types";
import * as Styles from "./Accordion.styles";


const AccordionSection: React.FC<AccordionSectionProps> = ({ title, content, summary, isExpanded, onToggle }) => {
    const key = title.slice(0, 15).trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
    const onSectionToggle = () => (isExpanded === true) ? onToggle(title, false) : onToggle(title, true);
    return (
            <Styles.Section  className={isExpanded && "accordion__section--expanded"}>
                <Styles.SectionHeader onClick={onSectionToggle}>
                    
                    <Styles.SectionHeading>
                        <Styles.SectionButton type="button" id={`${key}-heading`} aria-controls={`${key}-content`} aria-expanded={isExpanded ? "true" : "false"}>
                          {title}
                          <Styles.AccordionIcon aria-hidden="true"></Styles.AccordionIcon>
                        </Styles.SectionButton>
                    </Styles.SectionHeading>

                    {summary && <Styles.SectionSummary id={`${key}-summary`}>
                            {summary}
                        </Styles.SectionSummary>
                    }
                </Styles.SectionHeader>
                <Styles.SectionContent id={`${key}-content`} aria-labelledby={`${key}-heading`}>
                    {content}
                </Styles.SectionContent>
            </Styles.Section>
    );
};

export default AccordionSection;

