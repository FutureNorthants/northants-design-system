import React from "react";

import { SectionLinksMobileContentsProps } from "./SectionLinksMobileContents.types";
import * as Styles from "./SectionLinksMobileContents.styles";

const SectionLinksMobileContents: React.FC<SectionLinksMobileContentsProps> = ({ sectionLinksArray }) => (
    <Styles.Container>
        <Styles.Contents>
            <Styles.ContentsTitle>Contents</Styles.ContentsTitle>

            <Styles.ContentsList>
                {sectionLinksArray.map((link) =>
                    <Styles.ContentsItem key={link.title}>
                        <Styles.InlineLink href={"#" + link.id} title={"Go back to " + link.title}>
                            {link.title}
                        </Styles.InlineLink>
                    </Styles.ContentsItem>
                )}            
            </Styles.ContentsList>
        </Styles.Contents>
    </Styles.Container>
);

export default SectionLinksMobileContents;