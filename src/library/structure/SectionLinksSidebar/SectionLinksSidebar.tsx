import React from "react";

import { SectionLinksSidebarProps } from "./SectionLinksSidebar.types";
import * as Styles from "./SectionLinksSidebar.styles";

const SectionLinksSidebar: React.FC<SectionLinksSidebarProps> = ({ Title, Sections }) => (
    <Styles.Container data-testid="SectionLinksSidebar">
        <Styles.Title>
            {Title}
        </Styles.Title>
        <Styles.Body>
            {Sections.map((Section) => 
            <>
                {Section.SectionTitle && 
                    <Styles.SectionTitle>{Section.SectionTitle}</Styles.SectionTitle>
                }
                <Styles.List>
                    {Section.SectionLinks.map((link) =>
                        <Styles.ListItem aria-current={link.isCurrent}>
                            <Styles.ListItemLink href={link.url} title={"View more at " + link.title + " area"}>{link.title}</Styles.ListItemLink>
                        </Styles.ListItem>
                    )}
                </Styles.List>
            </>
            )} 
        </Styles.Body>
    </Styles.Container>
);

export default SectionLinksSidebar;