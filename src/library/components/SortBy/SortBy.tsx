
import React from "react";
import {handleParams} from './../../helpers/url-helpers.js';

import { SortByProps } from "./SortBy.types";
import * as Styles from "./SortBy.styles";

const SortBy: React.FC<SortByProps> = ({ sortBy, options }) => {
    
    const optionPicked = (e) => {
        handleParams('news', [{key: 'sortBy', value: e.target.value}]);
    }


    return (
    <Styles.Container data-testid="SortBy">
    <Styles.Label htmlFor="sort">
        Sort by 
    </Styles.Label>
    <Styles.Select id="sort" name="sort" onChange={optionPicked} defaultValue={sortBy}>
        {options.map((option, i) => 
            <Styles.Option key={i} value={option.value}>{option.title}</Styles.Option>
        )}
    </Styles.Select>
    </Styles.Container>
)};

export default SortBy;

