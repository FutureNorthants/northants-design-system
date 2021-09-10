
import React, {useContext, useState} from "react";
import LazyImage from "react-lazy-progressive-image";
import { MemorialHeroProps } from "./MemorialHero.types";
import * as Styles from "./MemorialHero.styles";
import styled, { ThemeContext, ThemeProvider } from "styled-components";


const MemorialHero: React.FC<MemorialHeroProps> = ({ src, placeholder, alt, theme, children, councilServices }) => {
    const themeContext = useContext(ThemeContext);
    return (
    <>
        <Styles.Wrapper>
            <Styles.Container>
                <Styles.Left>
            {children}
                <ThemeProvider theme={theme}>
                    {councilServices}
                </ThemeProvider>
                </Styles.Left>
                <Styles.Right>
            <LazyImage
                src={src}
                placeholder={placeholder}
                visibilitySensorProps={{
                    partialVisibility: true
                }}
            >
                {(src) => <Styles.Image image={src} title={alt} />} 
            </LazyImage>
            </Styles.Right>
            </Styles.Container>
        </Styles.Wrapper>


            
    </>
    )};

export default MemorialHero;

