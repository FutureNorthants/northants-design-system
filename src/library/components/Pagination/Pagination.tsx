
import React from "react";

import { PaginationProps } from "./Pagination.types";
import * as Styles from "./Pagination.styles";

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalResults, resultsPerPage }) => {

    // support for ...
const pagination = (c,m) => {
    var current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}
    
if(resultsPerPage === undefined) resultsPerPage = 10;
const numberOfNumbers = Math.ceil(totalResults / resultsPerPage);


const allNumbers = Array.from({ length: numberOfNumbers }, (v, i) => i + 1);

const numbers = pagination(currentPage, numberOfNumbers);
// const numbers = allNumbers;

const buttonClick = (url, param, paramVal) => {
    var TheAnchor = null;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";

    if (additionalURL) 
    {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor = tmpAnchor[1];
        if(TheAnchor)
            additionalURL = TheParams;

        tempArray = additionalURL.split("&");

        for (var i=0; i<tempArray.length; i++)
        {
            if(tempArray[i].split('=')[0] != param)
            {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }        
    }
    else
    {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor  = tmpAnchor[1];

        if(TheParams)
            baseURL = TheParams;
    }

    if(TheAnchor)
        paramVal += "#" + TheAnchor;

    var rows_txt = temp + "" + param + "=" + paramVal;
    window.location.href = (baseURL + "?" + newAdditionalURL + rows_txt);
}


if(numbers.length > 1) {
return (
    <Styles.Container data-testid="Pagination" role="navigation" aria-label="Pagination">
        {currentPage !== 1 &&
            <Styles.Previous onClick={() => buttonClick(window.location.href, "page", currentPage - 1)} title="Go back a page">Previous</Styles.Previous>
        }

        <Styles.NumbersContainer>
            {numbers.map((v,i) => 
            <Styles.NumberContainer key={i}>
                <Styles.Number onClick={() => buttonClick(window.location.href, "page", v)} isCurrent={currentPage === v}  title={currentPage === v ? "This is the current page" : v === "..." ? "See more pages" : ("Go to page " + v)}>
                    <Styles.VisuallyHidden>Page </Styles.VisuallyHidden>
                    {v}
                </Styles.Number>
            </Styles.NumberContainer>
            )}      
        </Styles.NumbersContainer>

        {currentPage < numberOfNumbers &&
            <Styles.Next onClick={() => buttonClick(window.location.href, "page", currentPage + 1)} title="Go forward a page">Next</Styles.Next>
        }

    </Styles.Container>
    );
}
return null
}

export default Pagination;
