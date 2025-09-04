import React from 'react';
import { CludoSearchBarProps } from './CludoSearchBar.types';
import * as Styles from './CludoSearchBar.styles';
import { CludoSearchOptions, CludoWrapper } from '@cludosearch/cludo-search-components/ssr';
import CludoAutoComplete from '../CludoSearch/CludoAutocomplete';

const CludoSearchBar: React.FunctionComponent<CludoSearchBarProps> = ({ customerId, engineId }) => {
  const cludoSearchConfig: CludoSearchOptions = {
    customerId: customerId,
    engineId: engineId,
    searchUrl: '/search',
    language: 'en',
    instanceId: '',
    components: {
      autocomplete: CludoAutoComplete,
    },
    autocomplete: {
      showInstantSuggestions: true,
      useSearchAsYouType: true,
    },
  };

  return (
    <Styles.Container data-testid="CludoSearchBar">
      <CludoWrapper config={cludoSearchConfig}>
        <CludoAutoComplete hasMargin={false} />
      </CludoWrapper>
    </Styles.Container>
  );
};

export default CludoSearchBar;
