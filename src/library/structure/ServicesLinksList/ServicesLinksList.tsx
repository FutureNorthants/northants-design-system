import React, { useState } from "react";

import { ServicesLinksListProps } from "./ServicesLinksList.types";
import * as Styles from "./ServicesLinksList.styles";
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';

const ServicesLinksList: React.FC<ServicesLinksListProps> = ({ 
    serviceLinksArray
}) => { 
    const originalOrderedArray = serviceLinksArray;
    const orderedArray = [...serviceLinksArray].sort((a, b) => (a.title > b.title ? 1 : -1));
    const [open, setOpen] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(0);

    function renderElements(link) {
        return <Styles.PagelinkBlock key={link.title}>
                    <Styles.ServiceTitleLink 
                        href={link.url} 
                        title={"Go to " + link.title}
                    >
                        <Styles.ServiceTitle text={link.title} />
                    </Styles.ServiceTitleLink>

                    {link.quickLinksArray.length > 0 && 
                        <Styles.QuicklinkList>
                            {link.quickLinksArray.map((quicklink) =>
                                <Styles.QuicklinkItem key={quicklink.title}>
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
                </Styles.PagelinkBlock>;
    }

    return(
        <>
            <Styles.Container id="all-services" className={open && "open"}>
                <Styles.ReorderControl>
                    Order services by<br/>
                    <Styles.ReorderButton onClick={() => setCurrentOrder(0)} className={currentOrder === 0 && "chosen"}>Most used</Styles.ReorderButton>
                    <Styles.ReorderButton onClick={() => setCurrentOrder(1)} className={currentOrder === 1 && "chosen"}>Alphabetical</Styles.ReorderButton>
                </Styles.ReorderControl>
                <Styles.LinksList>
                    {currentOrder === 0 ?
                        originalOrderedArray.map((link) =>
                            renderElements(link)
                        )
                        :
                        orderedArray.map((link) =>
                            renderElements(link)
                        )
                    }
                    {originalOrderedArray.length > 1 && ((originalOrderedArray.length + 1) % 3 === 0) &&
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

