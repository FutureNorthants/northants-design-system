import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ServicesLinksListProps } from './ServicesLinksList.types';
import * as Styles from './ServicesLinksList.styles';
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';
import Heading from '../../components/Heading/Heading';
import HeadingWithIconLink from '../../components/HeadingWithIconLink/HeadingWithIconLink';
import ServicesLinksBoxed from '../ServicesLinksBoxed/ServicesLinksBoxed';
import useLocalStorage from '../../helpers/UseLocalStorage';

const ServicesLinksList: React.FunctionComponent<ServicesLinksListProps> = ({
  serviceLinksArray,
  hasBackground = false,
  hideHeader = false,
  oneCol = false,
  serviceId = 'all-services',
  isBoxed = false,
}) => {
  const themeContext = useContext(ThemeContext);
  const [arrayOrdering, setArrayOrdering] = useState(serviceLinksArray);
  const orderedArray = [...serviceLinksArray].sort((a, b) => (a.title > b.title ? 1 : -1));
  const [open, setOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useLocalStorage(themeContext.cardinal_name + '-savedOrder', 0);
  const [orderButtons, setOrderButtons] = useState(true);

  useEffect(() => {
    if (currentOrder === '0' || currentOrder === 0) {
      setArrayOrdering(serviceLinksArray);
      setOrderButtons(true);
    } else {
      setArrayOrdering(orderedArray);
      setOrderButtons(false);
    }
  }, [currentOrder]);

  return (
    <>
      <Styles.Container id={serviceId} className={open && 'open'} hideHeader={hideHeader} isBoxed={isBoxed}>
        {!hideHeader && (
          <Styles.HomeTitle data-testid="servicesLinksListHeader">
            <Heading text="Council services" />
            <Styles.ReorderControl>
              Order services by
              <br />
              {orderButtons ? (
                <>
                  <Styles.ReorderButton
                    onClick={() => setCurrentOrder(0)}
                    tabIndex="-1"
                    className={'chosen'}
                    title="Most used services selected"
                    aria-label="Order services by most used"
                  >
                    Most used
                  </Styles.ReorderButton>
                  <Styles.ReorderButton
                    onClick={() => setCurrentOrder(1)}
                    title="Alphabetical services"
                    name="alphabetical services"
                    aria-label="Order services alphabetically"
                  >
                    Alphabetical
                  </Styles.ReorderButton>
                </>
              ) : (
                <>
                  <Styles.ReorderButton
                    onClick={() => setCurrentOrder(0)}
                    title="Most used services"
                    aria-label="Order services by most used"
                  >
                    Most used
                  </Styles.ReorderButton>
                  <Styles.ReorderButton
                    onClick={() => setCurrentOrder(1)}
                    tabIndex="-1"
                    className={'chosen'}
                    title="Alphabetical services selected"
                    aria-label="Order services alphabetically"
                  >
                    Alphabetical
                  </Styles.ReorderButton>
                </>
              )}
            </Styles.ReorderControl>
          </Styles.HomeTitle>
        )}
        {isBoxed ? (
          <ServicesLinksBoxed serviceLinksArray={arrayOrdering} />
        ) : (
          <Styles.LinksList>
            {arrayOrdering.map((link, i) => (
              <Styles.PagelinkBlock oneCol={oneCol} key={i} hasBackground={hasBackground}>
                <HeadingWithIconLink title={link.title} iconKey={link.iconKey} link={link.url} />
                <Styles.PagelinkInner>
                  {link.quickLinksArray?.length > 0 && (
                    <Styles.QuicklinkList>
                      {link.quickLinksArray.slice(0, 3).map((quicklink) => (
                        <Styles.QuicklinkItem key={quicklink.title}>
                          <Styles.Quicklink href={quicklink.url} title={quicklink.title}>
                            {quicklink.title}
                          </Styles.Quicklink>
                        </Styles.QuicklinkItem>
                      ))}
                    </Styles.QuicklinkList>
                  )}
                </Styles.PagelinkInner>
              </Styles.PagelinkBlock>
            ))}
            {arrayOrdering.length > 1 && (arrayOrdering.length + 1) % 3 === 0 && <Styles.PagelinkBlank />}
          </Styles.LinksList>
        )}
      </Styles.Container>
      {!isBoxed && !hideHeader && (
        <Styles.ViewMoreButtonContainer>
          <Styles.ViewMoreButton onClick={() => (open ? setOpen(false) : setOpen(true))}>
            <Styles.IconWrapper>
              <ChevronIcon direction={open ? 'up' : 'down'} colourFill="#000000" />
            </Styles.IconWrapper>
            View {open ? 'less' : 'more'} services
          </Styles.ViewMoreButton>
        </Styles.ViewMoreButtonContainer>
      )}
    </>
  );
};

export default ServicesLinksList;
