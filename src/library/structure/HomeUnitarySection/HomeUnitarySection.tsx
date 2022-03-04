import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { HomeUnitarySectionProps } from './HomeUnitarySection.types';
import * as Styles from './HomeUnitarySection.styles';
import PostCodeSearch from '../../components/PostCodeSearch/PostCodeSearch';
import Heading from '../../components/Heading/Heading';
import NorthColoured from '../../components/logos/NorthColouredLogo/logo';
import WestColoured from '../../components/logos/WestColouredLogo/logo';
import MapImage from './assets/map';

const HomeUnitarySection: React.FunctionComponent<HomeUnitarySectionProps> = ({
  title = 'Northamptonshire’s two new unitary councils',
  postcodeText = 'Not sure which you live in? Enter your postcode to find out',
  firstLine = 'There are now two new unitary councils for Northamptonshire – North and West. They’ll help us provide better services and information for residents and businesses.',
  westText = 'Covering the local areas of Daventry, Northampton Borough and South Northamptonshire',
  northText = 'Covering the local areas of Corby, East Northamptonshire, Kettering and Wellingborough',
}) => {
  const themeContext = useContext(ThemeContext);
  const northLink =
    themeContext.cardinal_name === 'north'
      ? themeContext.theme_vars.council_link
      : themeContext.theme_vars.other_council_link;
  const westLink =
    themeContext.cardinal_name === 'west'
      ? themeContext.theme_vars.council_link
      : themeContext.theme_vars.other_council_link;

  return (
    <Styles.Container data-testid="HomeUnitarySection">
      <Heading text={title} />
      <p>{firstLine}</p>
      <PostCodeSearch isUnitary title={postcodeText} />

      <Styles.MapSection>
        <Styles.West>
          <WestColoured />
          <p>{westText}</p>
          <Styles.CouncilLink
            colour={
              themeContext.cardinal_name === 'north'
                ? themeContext.theme_vars.other_council_action
                : themeContext.theme_vars.colours.action
            }
            href={westLink}
          >
            westnorthants.gov.uk
          </Styles.CouncilLink>
        </Styles.West>
        <Styles.Map>
          <MapImage />
        </Styles.Map>
        <Styles.North>
          <NorthColoured />
          <p>{northText}</p>
          <Styles.CouncilLink
            colour={
              themeContext.cardinal_name === 'west'
                ? themeContext.theme_vars.other_council_action
                : themeContext.theme_vars.colours.action
            }
            href={northLink}
          >
            northnorthants.gov.uk
          </Styles.CouncilLink>
        </Styles.North>
      </Styles.MapSection>
    </Styles.Container>
  );
};

export default HomeUnitarySection;
