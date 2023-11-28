import React from 'react';
import { ContentsProps } from './Contents.types';
import * as Styles from './Contents.styles';
import Heading from '../../components/Heading/Heading';

const Contents: React.FunctionComponent<ContentsProps> = ({
  contents,
  currentPath = undefined,
  title = 'Contents',
}) => (
  <Styles.Container data-testid="Contents">
    <Heading text={title} level={2} />
    <Styles.List>
      {contents.map((content, index) => (
        <Styles.ListItem key={index}>
          {content.url === currentPath ? (
            <Styles.CurrentPage>{content.title}</Styles.CurrentPage>
          ) : (
            <Styles.Link href={content.url} $active={content.url === currentPath}>
              {content.title}
            </Styles.Link>
          )}
        </Styles.ListItem>
      ))}
    </Styles.List>
  </Styles.Container>
);

export default Contents;
