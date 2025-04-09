import React, { useEffect, useState } from 'react';
import { CludoSearchBarProps } from './CludoSearchBar.types';
import * as Styles from './CludoSearchBar.styles';
import { CludoSearchOptions, CludoWrapper, SearchInput } from '@cludosearch/cludo-search-components';

const CludoSearchBar: React.FunctionComponent<CludoSearchBarProps> = ({ customerId, engineId }) => {
  const [notServer, setNotServer] = useState<boolean>(false);
  const cludoSearchConfig: CludoSearchOptions = {
    customerId: customerId,
    engineId: engineId,
    searchUrl: '/search',
    language: 'en',
  };

  useEffect(() => {
    setNotServer(true);
  }, []);

  return (
    <Styles.Container data-testid="CludoSearchBar">
      {notServer && (
        <CludoWrapper config={cludoSearchConfig}>
          <SearchInput className="wnc-cludo-input" formId="search" ariaLabel="Search the website" />
        </CludoWrapper>
      )}
    </Styles.Container>
  );
};

export default CludoSearchBar;
