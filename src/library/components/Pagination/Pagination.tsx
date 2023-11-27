import React from 'react';
import { PaginationProps } from './Pagination.types';
import * as Styles from './Pagination.styles';
import { handleParams } from './../../helpers/url-helpers.js';

const Pagination: React.FunctionComponent<PaginationProps> = ({
  currentPage,
  totalResults,
  resultsPerPage,
  postTo = 'search',
  buttonClickOverride,
}) => {
  // given current page number and max page number, return list of numbers to display with ... to reduce range visible
  const pagination = (currentPage, maxPage) => {
    var current = currentPage;
    var last = maxPage;
    var delta = 2;
    var left = current - delta;
    var right = current + delta + 1;
    var range = [];
    var rangeWithDots = [];
    var l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
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
  };

  if (resultsPerPage === undefined) {
    resultsPerPage = 10;
  }
  const numberOfNumbers = Math.ceil(totalResults / resultsPerPage);
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > numberOfNumbers) {
    currentPage = numberOfNumbers;
  }
  const numbers = pagination(currentPage, numberOfNumbers);

  const buttonClick = (pageNo) => {
    if (buttonClickOverride) {
      buttonClickOverride(pageNo);
    } else {
      handleParams(postTo, [{ key: 'page', value: pageNo }]);
    }
  };

  if (numbers.length > 1) {
    return (
      <Styles.Container data-testid="Pagination" role="navigation" aria-label="Pagination">
        {currentPage > 1 && (
          <Styles.Previous onClick={() => buttonClick(currentPage - 1)} title="Go back a page">
            Previous
          </Styles.Previous>
        )}

        <Styles.NumbersContainer>
          {numbers.map((v, i) => (
            <Styles.NumberContainer key={i}>
              {v === '...' && <Styles.Ellipsis>...</Styles.Ellipsis>}
              {v !== '...' && (
                <Styles.Number
                  onClick={() => buttonClick(v)}
                  isCurrent={currentPage === v}
                  title={currentPage === v ? 'This is the current page' : 'Go to page ' + v}
                >
                  <Styles.VisuallyHidden>Page </Styles.VisuallyHidden>
                  {v}
                </Styles.Number>
              )}
            </Styles.NumberContainer>
          ))}
        </Styles.NumbersContainer>

        {currentPage < numberOfNumbers && (
          <Styles.Next onClick={() => buttonClick(currentPage + 1)} title="Go forward a page">
            Next
          </Styles.Next>
        )}
      </Styles.Container>
    );
  }
  return null;
};

export default Pagination;
