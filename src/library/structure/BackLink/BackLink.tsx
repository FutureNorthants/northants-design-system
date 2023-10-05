import React from 'react';
import { BackLinkProps } from './BackLink.types';
import * as Styles from './BackLink.styles';

/**
 * A back link or a back button when using history
 */
const BackLink: React.FunctionComponent<BackLinkProps> = ({ link, useHistory = false }) => (
  <>
    {useHistory ? (
      <Styles.Container onClick={() => history.back()} data-testid="BackLink" as="button">
        Back
      </Styles.Container>
    ) : (
      <Styles.Container href={link} data-testid="BackLink">
        Back
      </Styles.Container>
    )}
  </>
);

export default BackLink;
