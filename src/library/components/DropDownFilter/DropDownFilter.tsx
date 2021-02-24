
import React, {useState} from "react";

import { DropDownFilterProps } from "./DropDownFilter.types";
import * as Styles from "./DropDownFilter.styles";

import {handleParams} from './../../helpers/url-helpers.js';




const DropDownFilter: React.FC<DropDownFilterProps> = ({ label, options, selected}) => {

    const [value, setValue] = useState(selected);
    
    const optionPicked = (e) => {
        setValue(e.target.value)
        handleParams('news', [{key: 'services', value: e.target.value}]);
    }

    let labelHidden = (label === null) ? true : false;
    return (
    <Styles.Container data-testid="DropDownFilter">
        
    <Styles.Label htmlFor="sort" labelHidden={labelHidden}>
        {label}
    </Styles.Label>
    <Styles.Select id="sort" name="sort" onChange={optionPicked} defaultValue={value}>
        {options.map((option, i) => 
            <Styles.Option key={i} value={option.value}>{option.title}</Styles.Option>
        )}
    </Styles.Select>
    </Styles.Container>
)};

export default DropDownFilter;

