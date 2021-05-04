
import React, { useState, useEffect } from "react";

import { AccordionProps } from "./Accordion.types";
import * as Styles from "./Accordion.styles";

import AccordionSection from "./AccordionSection";


const Accordion: React.FC<AccordionProps> = ({ sections, isFilter = false, withReadMore = true }) => {

    sections.map((section, i) => {
        section.accordionSectionId = i
    });

    const [showControls, setShowControls] = useState(false);
    const [openAll, setOpenAll] = useState(true);
    const [accordionStates, setAccordionStates] = useState(sections);

    useEffect(() => {
        const anyOpen = accordionStates.find(accordionState => accordionState.isExpanded === true);
        (anyOpen) ? setOpenAll(false) : setOpenAll(true);
        setShowControls(true)
      });

    const updateAccordionState = (accordionSectionId, value) => {

        // when a section is toggled update the parent (this) isExpanded value
        const newStatus = accordionStates.map(accordionState => {
            if(accordionState.accordionSectionId === accordionSectionId) {
                accordionState.isExpanded = value;
            }   
            return accordionState;
        });
        setAccordionStates(newStatus);

        // update the text that shows open all / close all
        (value) ? setOpenAll(false) : setOpenAll(true);
    };

    const toggleAll = () => {
        setOpenAll(!openAll);
        const newStatus = accordionStates.map(accordionState => {
             accordionState.isExpanded = openAll;
            return accordionState;
        });
        setAccordionStates(newStatus);
    }
    
    const uniqueID = () => {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    };


    const accordionId = `accordion${uniqueID()}`

    return (
        <Styles.Container data-testid="Accordion" id={accordionId}>
            {showControls && sections.length > 1 && <Styles.AccordionControls>
                <Styles.OpenAllButton onClick={toggleAll} type="button" aria-expanded={!openAll}>
                    {openAll ? "Open all" : "Close all"}
                    <Styles.VisuallyHidden> sections</Styles.VisuallyHidden>
                </Styles.OpenAllButton>
            </Styles.AccordionControls> }
            {accordionStates.map((section, i) => 
                <AccordionSection {...section} key={i} sectionId={`accordion_section${uniqueID()}`} onToggle={updateAccordionState} isFilter={isFilter} withReadMore={withReadMore} />
            )} 
        </Styles.Container>
    );
        
};

export default Accordion;

