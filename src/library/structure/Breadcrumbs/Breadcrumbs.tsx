import React from "react";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

import { BreadcrumbsProps } from "./Breadcrumbs.types";
import * as Styles from "./Breadcrumbs.styles";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbsArray }) => (
    <Styles.StyledMaxWidthContainer>
        <Styles.Container>
            {breadcrumbsArray.map((crumb) =>
                <Styles.Crumb key={crumb.title}>
                    {
                        <Styles.BreadcrumbLink href={crumb.url} title={"Go back to " + crumb.title}>{crumb.title}</Styles.BreadcrumbLink>
                    }
                </Styles.Crumb>
                
            )}            
        </Styles.Container>
    </Styles.StyledMaxWidthContainer>
);

export default Breadcrumbs;

