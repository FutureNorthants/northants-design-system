
import React from "react";

import { PaginationProps } from "./Pagination.types";
import * as Styles from "./Pagination.styles";

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalResults, resultsPerPage, maxNumbers }) => {

const numberOfNumbers = totalResults / resultsPerPage;


const allNumbers = Array.from({ length: numberOfNumbers }, (v, i) => i + 1);

// TODO - support maxNumbers
const numbers = allNumbers;



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

export default Pagination;
