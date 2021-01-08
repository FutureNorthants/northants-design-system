
import React, { useState } from "react";

import { AccordionProps } from "./Accordion.types";
import * as Styles from "./Accordion.styles";

import AccordionSection from "./AccordionSection";


const Accordion: React.FC<AccordionProps> = ({ sections }) => {

    const [openAll, setOpenAll] = useState(true);
    const [accordionStates, setAccordionStates] = useState(sections);

    const updateAccordionState = (title, value) => {
        const newStatus = accordionStates.map(accordionState => {
            if(accordionState.title === title) {
                accordionState.isExpanded = value;
            }   
            return accordionState;
        });
        setAccordionStates(newStatus);
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
            <Styles.AccordionControls>
                <Styles.OpenAllButton onClick={toggleAll} type="button" aria-expanded={!openAll}>
                    {openAll ? "Open all" : "Close all"}
                    <Styles.VisuallyHidden> sections</Styles.VisuallyHidden>
                </Styles.OpenAllButton>
            </Styles.AccordionControls>
            {accordionStates.map((section, i) => 
                <AccordionSection {...section} key={i} onToggle={updateAccordionState} />
            )} 
        </Styles.Container>
    );
        
};

export default Accordion;

