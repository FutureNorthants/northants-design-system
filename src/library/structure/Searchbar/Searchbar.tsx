
import React, {useState} from "react";

import { SearchbarProps } from "./Searchbar.types";
import * as Styles from "./Searchbar.styles";

import SearchIcon from '../../components/icons/SearchIcon/SearchIcon';

const Searchbar: React.FC<SearchbarProps> = ({placeholder, isLight, isLarge, searchTerm, submitInfo}) => { 

    let classes = '';
    classes += (isLight) ? " is-light" : "";
    classes += (isLarge) ? " is-large" : "";

  const {postTo, params} = (submitInfo !== undefined && submitInfo.length > 1) ? submitInfo[0] : { postTo: '', params: {}};

  const encodeParams = (params) => {
    return Object.keys(params).map(function(key) {
      return key + '=' + encodeURIComponent(params[key]);
    }).join('&');
  }

  const initialValues = {searchTerm: searchTerm}


  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    let queryString = '';
    let submitParams = params;

    if(inputs.searchTerm !== searchTerm || !('searchTerm' in submitParams)) {
      submitParams = {...submitParams, searchTerm: inputs.searchTerm}
    }

    if(encodeParams(submitParams).length !== 0) {
      queryString = `?${encodeParams(submitParams)}`;
    }


    // console.log(`${postTo}${queryString}`)
    window.location.href = `${postTo}${queryString}`;
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }



    return (
        <Styles.Container data-testid="Searchbar" className={classes}>
            <Styles.Form onSubmit={handleSubmit}>
                <Styles.Search role="search">
                    <Styles.Label htmlFor="search">{placeholder ? placeholder : 'Search'}</Styles.Label>
                    <Styles.InputWrapper>
                        {/* @TODO you cant update the value here */}
                        <Styles.Input id="search" type="text" name="searchTerm" placeholder={placeholder ? placeholder : 'Search'} onChange={handleInputChange}  value={inputs.searchTerm} required />
                        <Styles.Button type="submit" value="Search">
                            <SearchIcon colourFill="#fff" />
                            <Styles.ButtonText>Search</Styles.ButtonText>
                        </Styles.Button>
                    </Styles.InputWrapper>
                </Styles.Search>
            </Styles.Form>
        </Styles.Container>
    );
}

export default Searchbar;
