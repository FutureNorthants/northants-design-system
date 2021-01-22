
import React from "react";
import parse from "html-react-parser"

import { BlockQuoteProps } from "./BlockQuote.types";
import * as Styles from "./BlockQuote.styles";

// @TODO this needs to fit within the content border 

const BlockQuote: React.FC<BlockQuoteProps> = ({ quote, citation }) => (
    <Styles.Blockquote data-testid="BlockQuote">
        <Styles.Quote>{parse(quote)}</Styles.Quote>
        {citation && <Styles.Citation>{citation}</Styles.Citation>}
    </Styles.Blockquote>
);

export default BlockQuote;
