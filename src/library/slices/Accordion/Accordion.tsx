
import React, { useState, useEffect } from "react";

import { AccordionProps } from "./Accordion.types";
import * as Styles from "./Accordion.styles";

import AccordionSection from "./AccordionSection";


const Accordion: React.FC<AccordionProps> = ({ sections }) => {


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
    


    return (
        <Styles.Container data-testid="Accordion">
            {showControls && sections.length > 1 && <Styles.AccordionControls>
                <Styles.OpenAllButton onClick={toggleAll} type="button" aria-expanded={!openAll}>
                    {openAll ? "Open all" : "Close all"}
                    <Styles.VisuallyHidden> sections</Styles.VisuallyHidden>
                </Styles.OpenAllButton>
            </Styles.AccordionControls> }
            {accordionStates.map((section, i) => 
                <AccordionSection {...section} key={i} onToggle={updateAccordionState} />
            )} 
        </Styles.Container>
    );
        
};

export default Accordion;

