import React, { useContext } from 'react';
import MaxWidthContainer from '../library/structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../library/structure/PageMain/PageMain';
import Row from '../library/components/Row/Row';
import { ThemeContext } from 'styled-components';
import Heading from '../library/components/Heading/Heading';
import Column from '../library/components/Column/Column';

export default {
  title: 'Documentation/Typography',
  component: '',
};

export const Typography = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <MaxWidthContainer>
      <PageMain>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <Row>
          {themeContext.theme_vars.fontstack.split(',').map((font) => (
            <>
              <Column small="full" medium="one-half" large="one-third">
                <p>
                  <strong>Fonts: {font}</strong>
                </p>
              </Column>
              <Column small="full" medium="one-half" large="two-thirds">
                <p style={{ fontFamily: `${font.trim()}` }}>The quick brown fox jumps over the lazy dog</p>
              </Column>
            </>
          ))}
          <Column small="full" medium="one-half" large="one-third">
            <p>
              <strong>Body text</strong>
            </p>
          </Column>
          <Column small="full" medium="one-half" large="two-thirds">
            <div dangerouslySetInnerHTML={{ __html: nl2br(themeContext.fontStyles) }} />
          </Column>
          <Column small="full" medium="one-half" large="one-third">
            <Heading level={1} text="Heading 1" />
          </Column>
          <Column small="full" medium="one-half" large="two-thirds">
            <div dangerouslySetInnerHTML={{ __html: nl2br(themeContext.theme_vars.h1) }} />
          </Column>
          <Column small="full" medium="one-half" large="one-third">
            <Heading level={2} text="Heading 2" />
          </Column>
          <Column small="full" medium="one-half" large="two-thirds">
            <div dangerouslySetInnerHTML={{ __html: nl2br(themeContext.theme_vars.h2) }} />
          </Column>
          <Column small="full" medium="one-half" large="one-third">
            <Heading level={3} text="Heading 3" />
          </Column>
          <Column small="full" medium="one-half" large="two-thirds">
            <div dangerouslySetInnerHTML={{ __html: nl2br(themeContext.theme_vars.h3) }} />
          </Column>
          <Column small="full" medium="one-half" large="one-third">
            <Heading level={4} text="Heading 4" />
          </Column>
          <Column small="full" medium="one-half" large="two-thirds">
            <div dangerouslySetInnerHTML={{ __html: nl2br(themeContext.theme_vars.h4) }} />
          </Column>
        </Row>
      </PageMain>
    </MaxWidthContainer>
  );
};

const nl2br = (str, is_xhtml) => {
  if (typeof str === 'undefined' || str === null) {
    return '';
  }
  var breakTag = is_xhtml || typeof is_xhtml === 'undefined' ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
};
