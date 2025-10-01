import React from 'react';

import { SignpostLinksProps } from './SignpostLinks.types';
import * as Styles from './SignpostLinks.styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PostCodeSearch from '../../components/PostCodeSearch/PostCodeSearch';
import SignpostLinksList from '../../components/SignpostLinksList/SignpostLinksList';
import Button from '../../components/Button/Button';
import LinkIcon from '../../components/icons/LinkIcon/LinkIcon';
import { GeneratedTheme } from '../../../themes/ThemeVars.types';

const SignpostLinks: React.FC<SignpostLinksProps> = ({
  signpostLinksArray,
  TopLineText = 'Select your local area for more information:',
  otherCouncilLink,
  sovereignType = 'sovereigns',
}) => {
  const themeContext = useContext(ThemeContext) as GeneratedTheme;
  const councilLink = otherCouncilLink ? otherCouncilLink : themeContext.theme_vars.other_council_link;

  return (
    <>
      {signpostLinksArray.length > 1 ? (
        <Styles.Container>
          <Styles.Paragraph>{TopLineText}</Styles.Paragraph>

          <SignpostLinksList signpostLinksArray={signpostLinksArray} />

          <PostCodeSearch
            otherCouncilLink={councilLink}
            signPostLinks={signpostLinksArray}
            sovereignType={sovereignType}
          />

          {(otherCouncilLink || themeContext.theme_vars.other_council_link) && (
            <Styles.LastParagraph>
              If your area isn't listed, you may be a resident of&nbsp;
              <Styles.SignpostLink
                href={councilLink}
                title={themeContext.theme_vars.other_council_name + ' (this link will take you to an external website)'}
              >
                {themeContext.theme_vars.other_council_name}
              </Styles.SignpostLink>
              .
            </Styles.LastParagraph>
          )}
        </Styles.Container>
      ) : (
        <Styles.SingleButtonContainer>
          <Button
            url={signpostLinksArray[0].url}
            title={signpostLinksArray[0].areaName + ' (this link will take you to an external website)'}
          >
            <LinkIcon />
            {signpostLinksArray[0].cta_text ? signpostLinksArray[0].cta_text : signpostLinksArray[0].areaName}
          </Button>
        </Styles.SingleButtonContainer>
      )}
    </>
  );
};

export default SignpostLinks;
