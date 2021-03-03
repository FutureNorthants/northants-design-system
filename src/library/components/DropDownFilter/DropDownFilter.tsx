
import React, {useState} from "react";

import { DropDownFilterProps } from "./DropDownFilter.types";
import * as Styles from "./DropDownFilter.styles";

import {handleParams} from './../../helpers/url-helpers.js';
import DropDownSelect from "../DropDownSelect/DropDownSelect";

const DropDownFilter: React.FC<DropDownFilterProps> = ({ label, options, selected}) => {

    const [value, setValue] = useState(selected);
    
    const optionPicked = (e) => {
        setValue(e.target.value)
        handleParams('news', [{key: 'services', value: e.target.value}]);
    }

    let labelHidden = (label === null) ? true : false;
    return (
        <DropDownSelect label={label} options={options} optionPicked={optionPicked} selected={value} />
)};

export default DropDownFilter;

