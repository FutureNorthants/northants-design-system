import React from 'react';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import * as Styles from './Breadcrumbs.styles';
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({ breadcrumbsArray, hasMargin = false }) => (
  <Styles.Container hasMargin={hasMargin} data-testid="Breadcrumbs">
    {/* {breadcrumbsArray.length === 1 ? (
      <Styles.List as="div">
        <Styles.Crumb as="span">
          {
            <>
              <Styles.BreadcrumbLink href={breadcrumbsArray[0].url} title={breadcrumbsArray[0].title}>
                {breadcrumbsArray[0].title}
              </Styles.BreadcrumbLink>
              <Styles.IconWrapper>
                <ChevronIcon direction={'right'} colourFill="#C6C6C6" />
              </Styles.IconWrapper>
            </>
          }
        </Styles.Crumb>
      </Styles.List>
    ) : ( */}
    <Styles.List as={breadcrumbsArray.length === 1 ? 'div' : 'ol'}>
      {breadcrumbsArray.map((crumb) => (
        <Styles.Crumb key={crumb.title} as={breadcrumbsArray.length === 1 ? 'span' : 'li'}>
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
    {/* )} */}
  </Styles.Container>
);

export default Breadcrumbs;
