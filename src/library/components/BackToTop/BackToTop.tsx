import React, { useContext, useEffect, useState } from 'react';
import { BackToTopProps } from './BackToTop.types';
import * as Styles from './BackToTop.styles';
import ChevronIcon from '../icons/ChevronIcon/ChevronIcon';
import { ThemeContext } from 'styled-components';

const BackToTop: React.FunctionComponent<BackToTopProps> = ({ isActive = false }) => {
  const themeContext = useContext(ThemeContext);
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  });

  return (
    <Styles.Container data-testid="BackToTop">
      {isActive && (
        <Styles.BackToTopButton
          onClick={scrollToTop}
          visible={visible}
          data-testid="BackToTopButton"
          type="button"
          aria-label="Go to the top of the page"
        >
          <ChevronIcon colourFill={themeContext.theme_vars.colours.white} direction="up" />
        </Styles.BackToTopButton>
      )}
    </Styles.Container>
  );
};

export default BackToTop;
