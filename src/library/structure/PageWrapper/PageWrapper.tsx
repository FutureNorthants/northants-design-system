import React from 'react';
import { PageWrapperProps } from './PageWrapper.types';
import * as Styles from './PageWrapper.styles';

const PageWrapper: React.FunctionComponent<PageWrapperProps> = ({ colour, children }) => (
  <Styles.Container data-testid="PageWrapper" $colour={colour}>
    {children}
  </Styles.Container>
);

export default PageWrapper;
