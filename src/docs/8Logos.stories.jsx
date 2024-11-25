import React, { useContext } from 'react';
import MaxWidthContainer from '../library/structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../library/structure/PageMain/PageMain';
import Row from '../library/components/Row/Row';
import { ThemeContext } from 'styled-components';
import Column from '../library/components/Column/Column';
import GDSLogo from '../library/components/logos/GDSLogo/logo';
import NorthColoured from '../library/components/logos/NorthColouredLogo/logo';
import NorthWhite from '../library/components/logos/NorthWhiteLogo/logo';
import WestColoured from '../library/components/logos/WestColouredLogo/logo';
import WestWhite from '../library/components/logos/WestWhiteLogo/logo';
import Heading from '../library/components/Heading/Heading';
import NorthBlackLogo from '../library/components/logos/NorthBlackLogo/logo';
import WestBlackLogo from '../library/components/logos/WestBlackLogo/logo';

export default {
  title: 'Documentation/Logos',
  component: '',
};

export const Logos = () => {
  const themeContext = useContext(ThemeContext);

  const blackLogo = () => {
    switch (themeContext.cardinal_name) {
      case 'north':
        return <NorthBlackLogo />;
      case 'west':
        return <WestBlackLogo />;
      default:
        return <GDSLogo />;
    }
  };

  const colouredLogo = () => {
    switch (themeContext.cardinal_name) {
      case 'north':
        return <NorthColoured />;
      case 'west':
        return <WestColoured />;
      default:
        return <GDSLogo />;
    }
  };

  const whiteLogo = () => {
    switch (themeContext.cardinal_name) {
      case 'north':
        return <NorthWhite />;
      case 'west':
        return <WestWhite />;
      default:
        return <GDSLogo />;
    }
  };

  return (
    <MaxWidthContainer>
      <PageMain>
        <Row>
          <Column small="full" medium="full" large="full">
            <Heading level={2} text="White logo" />
            <div style={{ backgroundColor: themeContext.theme_vars.colours.action, padding: '20px' }}>
              {whiteLogo()}
            </div>
          </Column>
          <Column small="full" medium="full" large="full">
            <Heading level={2} text="Coloured logo (on white background)" />
            <div style={{ padding: '20px' }}>{colouredLogo()}</div>
          </Column>
          <Column small="full" medium="full" large="full">
            <Heading level={2} text="Black logo (on white background)" />
            <div style={{ padding: '20px' }}>{blackLogo()}</div>
          </Column>
        </Row>
      </PageMain>
    </MaxWidthContainer>
  );
};
