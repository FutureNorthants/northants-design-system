
import React from "react";

import { DropDownFilterProps } from "./DropDownFilter.types";
import * as Styles from "./DropDownFilter.styles";

import {handleParams} from './../../helpers/url-helpers.js';




const DropDownFilter: React.FC<DropDownFilterProps> = ({ options, selected = 0}) => {
    
    const optionPicked = (e) => {
        handleParams('news', [{key: 'services', value: e.target.value}]);
    }


    return (
    <Styles.Container data-testid="DropDownFilter">
    <Styles.Label htmlFor="sort">
        Filter by 
    </Styles.Label>
    <Styles.Select id="sort" name="sort" onChange={optionPicked} defaultValue={selected}>
        {options.map((option, i) => 
            <Styles.Option key={i} value={option.value}>{option.title}</Styles.Option>
        )}
    </Styles.Select>
    </Styles.Container>
)};

export default DropDownFilter;

