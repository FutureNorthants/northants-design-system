import React, { useState } from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ServicesLinksListProps } from "./ServicesLinksList.types";
import * as Styles from "./ServicesLinksList.styles";
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';
import Heading from "../../components/Heading/Heading";

const ServicesLinksList: React.FC<ServicesLinksListProps> = ({ 
    serviceLinksArray
}) => { 
    const themeContext = useContext(ThemeContext);
    const originalOrderedArray = serviceLinksArray;
    const orderedArray = [...serviceLinksArray].sort((a, b) => (a.title > b.title ? 1 : -1));
    const [open, setOpen] = useLocalStorage(themeContext.cardinal_name + ("-mobileIsOpen"), false);
    const [currentOrder, setCurrentOrder] = useLocalStorage(themeContext.cardinal_name + ("-savedOrder"), 0);

    function renderElements(link) {
        return <Styles.PagelinkBlock key={link.title}>
                {link.iconURL && 
                    <Styles.PagelinkIconContainer>
                        <Styles.PagelinkIcon  className="service-icon" src={link.iconURL} alt={link.title} />
                        <Styles.PagelinkIconHover className="service-icon-hover" src={link.iconHoverURL} alt={link.title} />
                    </Styles.PagelinkIconContainer>
                }
                <Styles.PagelinkInner>
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
                </Styles.PagelinkInner>
            </Styles.PagelinkBlock>;
    }

    return(
        <>
            <Styles.Container id="all-services" className={open && "open"}>
                <Styles.HomeTitle>
                    <Heading text="Council services" />
                    <Styles.ReorderControl>
                        Order services by<br/>
                        <Styles.ReorderButton onClick={() => setCurrentOrder(0)} tabIndex={currentOrder === 0 && "-1"}  className={currentOrder === 0 && "chosen"}>Most used</Styles.ReorderButton>
                        <Styles.ReorderButton onClick={() => setCurrentOrder(1)} tabIndex={currentOrder === 1 && "-1"} className={currentOrder === 1 && "chosen"}>Alphabetical</Styles.ReorderButton>
                    </Styles.ReorderControl>
                </Styles.HomeTitle>
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



function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
  
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
  
    return [storedValue, setValue];
  }

export default ServicesLinksList;

