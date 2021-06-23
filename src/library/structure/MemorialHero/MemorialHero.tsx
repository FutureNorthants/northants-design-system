
import React, {useState} from "react";
import LazyImage from "react-lazy-progressive-image";
import { MemorialHeroProps } from "./MemorialHero.types";
import * as Styles from "./MemorialHero.styles";
import styled, { ThemeProvider } from "styled-components";


const MemorialHero: React.FC<MemorialHeroProps> = ({ src, placeholder, alt, theme, children, councilServices }) => {

    return (
    <>
        <Styles.Wrapper data-testid="MemorialHero">
        <Styles.StyledMaxWidthContainer>
        <Styles.Container>
            <Styles.Left>
                {children}
                <ThemeProvider theme={theme}>
                    {councilServices}
                </ThemeProvider>
            </Styles.Left>
            <LazyImage
                src={src}
                placeholder={placeholder}
                visibilitySensorProps={{
                    partialVisibility: true
                }}
            >
                {(src, loading, isVisible) => <Styles.Image image={src} src={src} title={alt} loading={loading.toString()} />}
            </LazyImage>
            </Styles.Container>
        </Styles.StyledMaxWidthContainer>
        </Styles.Wrapper>
        
    </>
    )};

export default MemorialHero;

