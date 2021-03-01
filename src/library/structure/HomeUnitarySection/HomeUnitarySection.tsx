import React from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { HomeUnitarySectionProps } from "./HomeUnitarySection.types";
import * as Styles from "./HomeUnitarySection.styles";
import PostCodeSearch from "../../components/PostCodeSearch/PostCodeSearch";
import Heading from "../../components/Heading/Heading";
import Divider from "../../slices/Divider/Divider";

import NorthColoured from "./assets/north_coloured";
import WestColoured from "./assets/west_coloured";
import MapImage from "./assets/map";

const HomeUnitarySection: React.FC<HomeUnitarySectionProps> = ({ 
    title="Northamptonshire’s two new unitary councils",
    postcodeText="Not sure which you live in? Enter your postcode to find out",
    firstLine="There are now two new unitary councils for Northamptonshire – North and West. They’ll help us provide better services and information for residents and businesses.",
    westText="Covering the local areas of Daventry, Northampton Borough and South Northamptonshire",
    northText="Covering the local areas of Corby, East Northamptonshire, Kettering and Wellingborough"
}) => {
    const themeContext = useContext(ThemeContext);
    const northLink = themeContext.cardinal_name === "north" ? themeContext.theme_vars.council_link : themeContext.theme_vars.other_council_link
    const westLink = themeContext.cardinal_name === "west" ? themeContext.theme_vars.council_link : themeContext.theme_vars.other_council_link
    
    return(
        <Styles.Container>
            <Heading text={title} />
            <p>{firstLine}</p>
            <PostCodeSearch isUnitary title={postcodeText} />

            <Styles.MapSection>
                <Styles.West>
                    <NorthColoured />
                    <p>{westText}</p>
                    <Styles.CouncilLink href={westLink} title="Go to the West's website">westnorthants.gov.uk</Styles.CouncilLink>
                </Styles.West>
                <Styles.Map>
                    <MapImage />
                </Styles.Map>
                <Styles.North>
                    <WestColoured />
                    <p>{northText}</p>
                    <Styles.CouncilLink href={northLink} title="Go to the North's website">northnorthants.gov.uk</Styles.CouncilLink>
                </Styles.North>
            </Styles.MapSection>
            <Divider />
        </Styles.Container>
    )
};

export default HomeUnitarySection;