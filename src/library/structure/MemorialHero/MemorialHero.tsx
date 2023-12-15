import React, { useContext, useState } from 'react';
import { MemorialHeroProps } from './MemorialHero.types';
import * as Styles from './MemorialHero.styles';
import styled, { ThemeContext, ThemeProvider } from 'styled-components';
import Image from 'next/image';

const MemorialHero: React.FC<MemorialHeroProps> = ({ src, placeholder, alt, theme, children, councilServices }) => {
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
            <Image
              src={src}
              alt={alt}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </Styles.Right>
        </Styles.Container>
      </Styles.Wrapper>
    </>
  );
};

export default MemorialHero;
