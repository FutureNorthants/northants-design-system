import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  /**
   * What page are we on?
   */
  currentPage: number;

  /**
   * How many results are we showing per page, defaults to 10
   */
  resultsPerPage?: number;

  /**
   * What is the total number of results
   */
  totalResults: number;

  /**
   * Which end point are we going to - defaults to search
   */
  postTo?: string;

  /**
   * An optional pagination override function
   */
  buttonClickOverride?: Dispatch<SetStateAction<number>>;;
}
