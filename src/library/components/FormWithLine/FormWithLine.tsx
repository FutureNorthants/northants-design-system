
import React from "react";

import { FormWithLineProps } from "./FormWithLine.types";
import * as Styles from "./FormWithLine.styles";

/**
 * Form element - a container with a line on the left
 */
const FormWithLine: React.FC<FormWithLineProps> = ({
  lineColour = "#C6C6C6",
  hideLine = false, 
  formRole = "search",
  formMethod = "get",
  // TODO: default URL ?? or make it required? Or remove it and use an event? 
  formURL = "/api/v1/area-finder/",
  isError = false,
  children
  }) => {
    return (
      <Styles.Container>
        <Styles.Line lineColour={lineColour} hideLine={hideLine} isError={isError} />
        <Styles.Form hideLine={hideLine} role={formRole} method={formMethod} url={formURL}>
          {children}
        </Styles.Form>
      </Styles.Container>
    );
  };
  

export default FormWithLine;


{/* <form  class="form form--area-search"  data-area-search="">
                        <div data-form-title class="area-search__title">Enter your postcode</div>
                        <div data-form-info class="area-search__info">For example HP20 1UY</div>
                        <div data-response-text class="area-search__response-text"></div>
                        <div data-form-input-wrapper class="area-search__input-wrapper">
                            <label class="u-sr-only" for="postcode">Search postcode</label>
                            <input data-input-value id="postcode" type="text" placeholder="Search" name="postcode">
                            <button data-submit-button class="button button--basic button--area-search" type="submit" aria-label="Submit">
                                Find
                            </button>
                        </div>
                        <button data-find-another-button type="button" class="button button--link hide">
                            Find another postcode
                        </button>
                    </form> */}