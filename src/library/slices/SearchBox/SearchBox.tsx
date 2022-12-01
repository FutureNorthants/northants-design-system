import React from 'react';
import { SearchBoxProps } from './SearchBox.types';
import * as Styles from './SearchBox.styles';
import Input from '../../components/Input/Input';
import { uniqueID } from '../../helpers/helpers';

const SearchBox: React.FC<SearchBoxProps> = ({
  fieldName = 'search',
  id = null,
  label,
  labelHidden = true,
  method = 'post',
  path,
  placeholder,
  searchText = 'Search',
}) => {
  if (id === null) {
    id = uniqueID();
  }

  return (
    <Styles.Container data-testid="SearchBox">
      <form method={method} action={path} aria-label={label}>
        <div role="search">
          <Styles.Label htmlFor={id} labelHidden={labelHidden}>
            {label}
          </Styles.Label>
          <Styles.InputWrapper>
            <Input name={fieldName} placeholder={placeholder} id={id} />
            <Styles.Button type="submit" value={searchText} />
          </Styles.InputWrapper>
        </div>
      </form>
    </Styles.Container>
  );
};

export default SearchBox;
