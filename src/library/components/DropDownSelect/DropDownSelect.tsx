
import React, {useState} from "react";

import { DropDownSelectProps } from "./DropDownSelect.types";
import * as Styles from "./DropDownSelect.styles";

import {handleParams} from '../../helpers/url-helpers.js';




const DropDownSelect: React.FC<DropDownSelectProps> = ({ label, options, onChange, selected}) => {    
    let labelHidden = (label === null) ? true : false;
    return (
        <Styles.Container>
                
            <Styles.Label htmlFor="sort" labelHidden={labelHidden}>
                {label}
            </Styles.Label>
            <Styles.Select id="sort" name="sort" onChange={onChange && onChange} defaultValue={selected && selected}>
                {options.map((option, i) => 
                    <Styles.Option key={i} value={option.value}>{option.title}</Styles.Option>
                )}
            </Styles.Select>
        </Styles.Container>
    )
};

export default DropDownSelect;

