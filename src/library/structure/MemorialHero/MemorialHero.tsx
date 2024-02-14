import React, { useContext } from 'react';
import { MemorialHeroProps } from './MemorialHero.types';
import * as Styles from './MemorialHero.styles';
import { ThemeContext, ThemeProvider } from 'styled-components';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

const MemorialHero: React.FunctionComponent<MemorialHeroProps> = ({
  src,
  placeholder,
  alt,
  theme,
  children,
  councilServices,
}) => {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <Styles.Wrapper aria-label="Memorial Hero">
        <Styles.HiddenH1>{themeContext.full_name} Council</Styles.HiddenH1>
        <Styles.Container>
          <Styles.Left>
            {children}
            <ThemeProvider theme={theme}>{councilServices}</ThemeProvider>
          </Styles.Left>
          <Styles.Right>
            <Styles.Image>
              <ResponsiveImage
                imageSmall={placeholder}
                imageLarge={src}
                imageAltText={alt}
                smallWidth="144"
                largeWidth="1440"
                ratio="16by9"
                objectFit="contain"
              />
            </Styles.Image>
          </Styles.Right>
        </Styles.Container>
      </Styles.Wrapper>
    </>
  );
};

export default MemorialHero;
