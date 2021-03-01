import React from "react";
import LazyImage from "react-lazy-progressive-image";

import { PromoBannerProps } from "./PromoBanner.types";
import * as Styles from "./PromoBanner.styles";
import Heading from "../../components/Heading/Heading";

const PromoBanner: React.FC<PromoBannerProps> = ({ 
    title, 
    image1440x810,
    image144x81,
    ctaText, 
    ctaUrl, 
    children 
}) => (
    <Styles.Container>
        <LazyImage
            src={image1440x810}
            placeholder={image144x81}
            visibilitySensorProps={{
                partialVisibility: true
            }}
        >
            {src => 
                <Styles.Image img={src} />
            }
        </LazyImage>
        <Styles.Wrapper>
            <Heading text={title} />
            <Styles.Content>{children}</Styles.Content>
            <Styles.CTA href={ctaUrl}>{ctaText}</Styles.CTA>
        </Styles.Wrapper>
    </Styles.Container>
);

export default PromoBanner;