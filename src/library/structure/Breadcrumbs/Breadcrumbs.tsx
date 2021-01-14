import React from "react";

import { BreadcrumbsProps } from "./Breadcrumbs.types";
import * as Styles from "./Breadcrumbs.styles";
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbsArray }) => (
    <Styles.Container>
        <Styles.List>
            {breadcrumbsArray.map((crumb) =>
                <Styles.Crumb key={crumb.title}>
                    {  
                        <>
                        <Styles.BreadcrumbLink href={crumb.url} title={"Go back to " + crumb.title}>
                            {crumb.title}
                        </Styles.BreadcrumbLink>
                        <Styles.IconWrapper>
                            <ChevronIcon direction={"right"} colourFill="#C6C6C6" />
                        </Styles.IconWrapper>
                        </>
                    }
                </Styles.Crumb>
            )}            
        </Styles.List>
        <Styles.MobileCrumb>
            <Styles.BreadcrumbLink href={breadcrumbsArray[breadcrumbsArray.length-1].url} title={"Go back to previous page"}>
                <Styles.BackIconWrapper>
                    <ChevronIcon direction={"left"} />
                </Styles.BackIconWrapper>
                Back
            </Styles.BreadcrumbLink>
        </Styles.MobileCrumb>
    </Styles.Container>
);

export default Breadcrumbs;