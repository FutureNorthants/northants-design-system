import React, { useState } from "react";

import { SectionLinksSidebarProps } from "./SectionLinksSidebar.types";
import * as Styles from "./SectionLinksSidebar.styles";
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';

const SectionLinksSidebar: React.FC<SectionLinksSidebarProps> = ({ Title, Sections }) => {
    const [open, setOpen] = useState(false);

    return(
        <Styles.Container data-testid="SectionLinksSidebar">
            <Styles.MobileTitleButton onClick={() => open ? setOpen(false) : setOpen(true)}>
                {Title}
                <Styles.IconWrapper>
                    <ChevronIcon direction={open ? "up" : "down"} />
                </Styles.IconWrapper>
            </Styles.MobileTitleButton>
            <Styles.Title>
                {Title}
            </Styles.Title>
            <Styles.Body className={!open && "closed"}>
                {Sections.map((Section) => 
                <>
                    {Section.SectionTitle && 
                        <Styles.SectionTitle>{Section.SectionTitle}</Styles.SectionTitle>
                    }
                    <Styles.List>
                        {Section.SectionLinks.map((link) =>
                            <Styles.ListItem aria-current={link.isCurrent ? "true" : null}>
                                <Styles.ListItemLink href={link.url} title={"View more at " + link.title + " area"}>{link.title}</Styles.ListItemLink>
                            </Styles.ListItem>
                        )}
                    </Styles.List>
                </>
                )} 
            </Styles.Body>
        </Styles.Container>
    );
}

export default SectionLinksSidebar;