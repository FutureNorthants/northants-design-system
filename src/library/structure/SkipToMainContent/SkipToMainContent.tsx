
import React from "react";

import { SkipToMainContentProps } from "./SkipToMainContent.types";
import * as Styles from "./SkipToMainContent.styles";

const SkipToMainContent: React.FC<SkipToMainContentProps> = () => (
    <Styles.SkipToMainContent data-testid="SkipToMainContent" href="#main" class="govuk-skip-link">Skip to main content</Styles.SkipToMainContent>
);

export default SkipToMainContent;

