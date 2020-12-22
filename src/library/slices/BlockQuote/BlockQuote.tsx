
import React from "react";

import { BlockQuoteProps } from "./BlockQuote.types";
import * as Styles from "./BlockQuote.styles";

// @TODO this needs to fit within the content border 

const BlockQuote: React.FC<BlockQuoteProps> = ({ quote, citation }) => (
    <Styles.Blockquote data-testid="BlockQuote">
        <Styles.Quote>{quote}</Styles.Quote>
        <Styles.Citation>{citation}</Styles.Citation>
    </Styles.Blockquote>
);

export default BlockQuote;
