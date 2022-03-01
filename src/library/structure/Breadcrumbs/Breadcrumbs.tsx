import React from 'react';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import * as Styles from './Breadcrumbs.styles';
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({ breadcrumbsArray, hasMargin = false }) => (
  <Styles.Container hasMargin={hasMargin} data-testid="Breadcrumbs">
    <Styles.List>
      {breadcrumbsArray.map((crumb) => (
        <Styles.Crumb key={crumb.title}>
          {
            <>
              <Styles.BreadcrumbLink href={crumb.url} title={crumb.title}>
                {crumb.title}
              </Styles.BreadcrumbLink>
              <Styles.IconWrapper>
                <ChevronIcon direction={'right'} colourFill="#C6C6C6" />
              </Styles.IconWrapper>
            </>
          }
        </Styles.Crumb>
      ))}
    </Styles.List>
  </Styles.Container>
);

export default Breadcrumbs;
