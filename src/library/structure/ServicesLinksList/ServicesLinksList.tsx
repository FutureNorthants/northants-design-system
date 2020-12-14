
import React from "react";

import { ServicesLinksListProps } from "./ServicesLinksList.types";
import * as Styles from "./ServicesLinksList.styles";

const ServicesLinksList: React.FC<ServicesLinksListProps> = ({ 
    serviceLinksArray 
}) => (
    <Styles.Container id="all-services">
        <Styles.LinksList>
            {serviceLinksArray.map((link) =>
                <Styles.PagelinkBlock key={link.url}>
                    <Styles.ServiceTitle>
                        <Styles.ServiceTitleLink 
                            href={link.url} 
                            title={"Go to " + link.title}
                        >
                            {link.title}
                        </Styles.ServiceTitleLink>
                    </Styles.ServiceTitle>

                    {link.quickLinksArray.length > 0 && 
                        <Styles.QuicklinkList>
                            {link.quickLinksArray.map((quicklink) =>
                                <Styles.QuicklinkItem key={quicklink.url}>
                                    <Styles.Quicklink 
                                        href={quicklink.url} 
                                        title={"Go to " + quicklink.title}
                                    >
                                        {quicklink.title}
                                    </Styles.Quicklink>
                                </Styles.QuicklinkItem>
                            )}
                        </Styles.QuicklinkList>
                    }
                </Styles.PagelinkBlock>
            )}
            {serviceLinksArray.length > 1 && ((serviceLinksArray.length + 1) % 3 === 0) &&
                <Styles.PagelinkBlank />
            }
        </Styles.LinksList>
    </Styles.Container>
);

export default ServicesLinksList;

