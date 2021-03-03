
import React from "react";
import {handleParams} from './../../helpers/url-helpers.js';

import { SortByProps } from "./SortBy.types";
import * as Styles from "./SortBy.styles";
import DropDownSelect from "../DropDownSelect/DropDownSelect";

const SortBy: React.FC<SortByProps> = ({ selected, options }) => {
    
    const optionPicked = (e) => {
        handleParams('news', [{key: 'sortBy', value: e.target.value}]);
    }

    return (
        // TODO: replace with dropdownselect component
        <DropDownSelect label="Sort by" options={options} onChange={optionPicked} selected={selected} />
)};

export default SortBy;

