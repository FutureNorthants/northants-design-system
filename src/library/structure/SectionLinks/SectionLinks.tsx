
import React from "react";

import { SectionLinksProps } from "./SectionLinks.types";
import * as Styles from "./SectionLinks.styles";

const SectionLinks: React.FC<SectionLinksProps> = ({ 
    sectionTitle, 
    displayTitle = true, 
    sectionSlug, 
    pageLinksArray 
}) => (
    <Styles.Container id={sectionSlug}>
        {displayTitle && 
            <Styles.SectionTitle text={sectionTitle} />
        }
        <Styles.LinksList>
            {pageLinksArray.map((link) =>
                <Styles.Pagelink key={link.url} href={link.url} title={"Go to " + link.title}>
                    <Styles.Title>{link.title}</Styles.Title>
                    <Styles.Summary>{link.summary}</Styles.Summary>
                </Styles.Pagelink>
            )}
            {/* TODO: change this very lazy if statement - 
            ** need to place a blank page link in every time the list ends with 2 page links as we are usig flexbox space-between to evenly space elements - I cant be bothered to figure this out now
            ** Or else change space-between, but if you dont use it then you need set margins, which have to be customised for each breakpoint
            ** THE CURRENT VERSION WILL NOT WORK with any trailing two links with 14 links and above
            */}

            {pageLinksArray.length > 1 && (pageLinksArray.length === 2 || pageLinksArray.length === 5 || pageLinksArray.length === 8 || pageLinksArray.length === 11) &&
                <Styles.PagelinkBlank />
            }
        </Styles.LinksList>
    </Styles.Container>
);

export default SectionLinks;

