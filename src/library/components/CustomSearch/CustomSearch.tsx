import React, { useId } from 'react';
import { CustomSearchProps } from './CustomSearch.types';
import * as Styles from './CustomSearch.styles';
import Input from '../Input/Input';

const CustomSearch: React.FunctionComponent<CustomSearchProps> = ({
  method,
  path,
  label,
  hasHiddenLabel = true,
  fieldName,
  placeholder,
  searchText,
  id,
}) => {
  if (!id) {
    id = useId();
  }
  return (
    <Styles.Container data-testid="CustomSearch">
      <form method={method} action={path} aria-label={label}>
        <div role="search">
          <Styles.Label htmlFor={id} $hasHiddenLabel={hasHiddenLabel}>
            {label}
          </Styles.Label>
          <Styles.InputWrapper>
            <Input name={fieldName} placeholder={placeholder} id={id} />
            <Styles.SubmitButton type="submit" value={searchText} />
          </Styles.InputWrapper>
        </div>
      </form>
    </Styles.Container>
  );
};

export default CustomSearch;
