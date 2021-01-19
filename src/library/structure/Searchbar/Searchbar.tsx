
import React from "react";

import { SearchbarProps } from "./Searchbar.types";
import * as Styles from "./Searchbar.styles";

import SearchIcon from '../../components/icons/SearchIcon/SearchIcon';

const Searchbar: React.FC<SearchbarProps> = ({placeholder, isLight, isLarge}) => { 

    let classes = '';
    classes += (isLight) ? " is-light" : "";
    classes += (isLarge) ? " is-large" : "";

    return (
        <Styles.Container data-testid="Searchbar" className={classes}>
            <Styles.Form>
                <Styles.Search role="search">
                    <Styles.Label htmlFor="search">{placeholder ? placeholder : 'Search'}</Styles.Label>
                    <Styles.InputWrapper>
                        <Styles.Input id="search" type="text" placeholder={placeholder ? placeholder : 'Search'} />
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
