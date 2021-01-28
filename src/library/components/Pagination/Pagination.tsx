
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


if(numbers.length > 1) {
return (
    <Styles.Container data-testid="Pagination" role="navigation" aria-label="Pagination">

        {currentPage !== 1 &&
            <Styles.Previous href={`#${currentPage - 1}`}>Previous</Styles.Previous>
        }


        <Styles.NumbersContainer>

                {numbers.map((v,i) => 
                <Styles.NumberContainer key={i}>
                        <Styles.Number href={`#${v}`} isCurrent={currentPage === v} >
                            <Styles.VisuallyHidden>Page </Styles.VisuallyHidden>
                            {v}
                        </Styles.Number>

                </Styles.NumberContainer>
                )}
                    
        </Styles.NumbersContainer>

    
        {currentPage < numberOfNumbers &&
        <Styles.Next href={`#${currentPage + 1}`}>Next</Styles.Next>
        }

    </Styles.Container>
    );
}
return null
}

export default Pagination;
