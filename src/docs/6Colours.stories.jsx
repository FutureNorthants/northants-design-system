import React, { useContext } from 'react';
import MaxWidthContainer from '../library/structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../library/structure/PageMain/PageMain';
import Row from '../library/components/Row/Row';
import { ThemeContext } from 'styled-components';
import Column from '../library/components/Column/Column';

export default {
  title: 'Documentation/Colours',
  component: '',
};

export const Colours = () => {
  const themeContext = useContext(ThemeContext);
  const colourObject = themeContext.theme_vars.colours;
  return (
    <MaxWidthContainer>
      <PageMain>
        <Row>
          {Object.keys(colourObject).map((key) => (
            <>
              <Column small="one-quarter" medium="one-quarter" large="one-quarter">
                <div
                  style={{ backgroundColor: colourObject[key], padding: '40px 20px', border: '1px solid #efefef' }}
                ></div>
              </Column>
              <Column small="one-quarter" medium="one-quarter" large="one-quarter">
                <div style={{ padding: '20px' }}>{colourObject[key]}</div>
              </Column>
              <Column small="one-half" medium="one-half" large="one-half">
                <p style={{ padding: '20px' }}>{key}</p>
              </Column>
            </>
          ))}
        </Row>
      </PageMain>
    </MaxWidthContainer>
  );
};
