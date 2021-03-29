import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ServicesLinksListProps } from "./ServicesLinksList.types";
import * as Styles from "./ServicesLinksList.styles";
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';
import Heading from "../../components/Heading/Heading";

import serviceIcons from '../../components/icons/services/ServicesIcons';

const ServicesLinksList: React.FC<ServicesLinksListProps> = ({ 
    serviceLinksArray
}) => { 
    const themeContext = useContext(ThemeContext);
    const [arrayOrdering, setArrayOrdering] = useState(serviceLinksArray);
    // const originalOrderedArray = serviceLinksArray;
    const orderedArray = [...serviceLinksArray].sort((a, b) => (a.title > b.title ? 1 : -1));
    const [open, setOpen] = useState(false);
    const [currentOrder, setCurrentOrder] = useLocalStorage((themeContext.cardinal_name + ("-savedOrder")), 0);
    const [orderButtons, setOrderButtons] = useState(true)

    useEffect(() => {
        if(currentOrder === "0" || currentOrder === 0) {
            setArrayOrdering(serviceLinksArray);
            setOrderButtons(true)
        } else {
            setArrayOrdering(orderedArray);
            setOrderButtons(false)
        }
    }, [currentOrder])

    const DynamicComponent = ({name, isHover = false}) => {
        let DynamicIcon;
        if(name === "culture") {
            let newName = name + themeContext.cardinal_name;
            DynamicIcon = serviceIcons[newName + (isHover ? "Hover" : "")];
        } else {
            DynamicIcon = serviceIcons[name + (isHover ? "Hover" : "")];
        }
        return <DynamicIcon colourFill={themeContext.theme_vars.colours.action} />;
    }

    return(
        <>
            <Styles.Container id="all-services" className={open && "open"}>
                <Styles.HomeTitle>
                    <Heading text="Council services" />
                    <Styles.ReorderControl>
                        Order services by<br/>
                        {
                            orderButtons ?
                                <>
                                <Styles.ReorderButton onClick={() => setCurrentOrder(0)} tabIndex="-1"  className={"chosen"} title="Most used selected">Most used</Styles.ReorderButton>
                                <Styles.ReorderButton onClick={() => setCurrentOrder(1)} title="Alphabetical">Alphabetical</Styles.ReorderButton>
                                </>
                                :
                                <>
                                <Styles.ReorderButton onClick={() => setCurrentOrder(0)} title="Most used">Most used</Styles.ReorderButton>
                                <Styles.ReorderButton onClick={() => setCurrentOrder(1)} tabIndex="-1"  className={"chosen"} title="Alphabetical selected">Alphabetical</Styles.ReorderButton>
                                </>
                            }
                    </Styles.ReorderControl>
                </Styles.HomeTitle>
                <Styles.LinksList>
                    {arrayOrdering.map((link) => 
                        <Styles.PagelinkBlock key={link.title}>
                            {link.iconKey && 
                                <Styles.PagelinkIconContainer>
                                    <Styles.ServiceIconLink 
                                        href={link.url} 
                                        title={"Go to " + link.title}
                                    >
                                        <Styles.PagelinkIcon className="service-icon">
                                            <DynamicComponent name={link.iconKey} isHover={false} />
                                        </Styles.PagelinkIcon>
                                        <Styles.PagelinkIconHover className="service-icon-hover">
                                            <DynamicComponent name={link.iconKey} isHover={true} />
                                        </Styles.PagelinkIconHover>
                                    </Styles.ServiceIconLink>
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
                        </Styles.PagelinkBlock>
                    )}
                    {arrayOrdering.length > 1 && ((arrayOrdering.length + 1) % 3 === 0) &&
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

