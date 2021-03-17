
import React from "react";

import { RemovableTagProps } from "./RemovableTag.types";
import * as Styles from "./RemovableTag.styles";

import {} from './../../helpers/url-helpers.js';

const RemovableTag: React.FC<RemovableTagProps> = ({ index, preposition, label, value, param, clickHandler }) =>  (
    
    <Styles.Wrapper data-testid="RemovableTag">
        { index > 0 && preposition && <Styles.Preposition>{preposition}</Styles.Preposition> }
        <Styles.Container >
            <Styles.Text>{label}</Styles.Text>
            <Styles.Button aria-label={`Remove filter ${label}`} onClick={clickHandler}>x</Styles.Button>
        </Styles.Container>
    </Styles.Wrapper>
);

    

export default RemovableTag;

