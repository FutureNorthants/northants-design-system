import React from "react";

import { BreadcrumbsProps } from "./Breadcrumbs.types";
import * as Styles from "./Breadcrumbs.styles";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbsArray }) => (
    <Styles.StyledMaxWidthContainer>
        <Styles.List>
            {breadcrumbsArray.map((crumb) =>
                <Styles.Crumb key={crumb.title}>
                    {
                        <Styles.BreadcrumbLink href={crumb.url} title={"Go back to " + crumb.title}>{crumb.title}</Styles.BreadcrumbLink>
                    }
                </Styles.Crumb>
            )}            
        </Styles.List>
        <Styles.MobileCrumb>
            {/* TODO: add in back icon */}
            <Styles.BreadcrumbLink href={breadcrumbsArray[breadcrumbsArray.length-1].url} title={"Go back to previous page"}>Back</Styles.BreadcrumbLink>
        </Styles.MobileCrumb>
    </Styles.StyledMaxWidthContainer>
);

export default Breadcrumbs;