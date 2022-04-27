import React from 'react';
import { ContentLink, ContentsProps } from '../Contents/Contents.types';
import * as Styles from './ContentsNavigation.styles';

const ContentsNavigation: React.FunctionComponent<ContentsProps> = ({ contents, currentPath }) => {
  const currentPage = (): number => {
    return contents.findIndex((item) => item.url === currentPath);
  };

  const nextPage: ContentLink | undefined = currentPage() !== -1 ? contents[currentPage() + 1] : undefined;

  const previousPage: ContentLink | undefined =
    currentPage() !== contents.length ? contents[currentPage() - 1] : undefined;

  return (
    <Styles.Container data-testid="ContentsNavigation">
      {previousPage && (
        <Styles.NavigationLink href={previousPage.url}>
          <Styles.Arrow>&larr;</Styles.Arrow>
          <Styles.LinkText>
            Previous
            <br />
            <Styles.PageTitle>{previousPage.title}</Styles.PageTitle>
          </Styles.LinkText>
        </Styles.NavigationLink>
      )}
      {nextPage && (
        <Styles.NavigationLink href={nextPage.url}>
          <Styles.Arrow>&rarr;</Styles.Arrow>
          <Styles.LinkText>
            Next
            <br />
            <Styles.PageTitle>{nextPage.title}</Styles.PageTitle>
          </Styles.LinkText>
        </Styles.NavigationLink>
      )}
    </Styles.Container>
  );
};

export default ContentsNavigation;
