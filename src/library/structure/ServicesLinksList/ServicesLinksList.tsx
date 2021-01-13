import React, { useState } from "react";

import { ServicesLinksListProps } from "./ServicesLinksList.types";
import * as Styles from "./ServicesLinksList.styles";
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';

const ServicesLinksList: React.FC<ServicesLinksListProps> = ({ 
    serviceLinksArray 
}) => { 
    const [open, setOpen] = useState(false);
    return(
        <>
            <Styles.Container id="all-services" className={open && "open"}>
                <Styles.LinksList>
                    {serviceLinksArray.map((link) =>
                        <Styles.PagelinkBlock key={link.url}>
                            <Styles.ServiceTitleLink 
                                href={link.url} 
                                title={"Go to " + link.title}
                            >
                                <Styles.ServiceTitle text={link.title} />
                            </Styles.ServiceTitleLink>

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
            <Styles.ViewMoreButtonContainer>
                <Styles.ViewMoreButton onClick={() => open ? setOpen(false) : setOpen(true)}>
                    <Styles.IconWrapper>
                        <ChevronIcon direction={open ? "up" : "down"} colourFill="#000000" />
                    </Styles.IconWrapper>
                    View { open ? "less" : "more" } services
                </Styles.ViewMoreButton>
            </Styles.ViewMoreButtonContainer>
        </>
    );
}

export default ServicesLinksList;

