import React from "react";
import LazyImage from "react-lazy-progressive-image";
import Heading from "../../components/Heading/Heading";
import { PromoBlockProps } from "./PromoBlock.types";
import * as Styles from "./PromoBlock.styles";

/**
 * Promotional campaign block, showing a tile for each campaign, similar to news article featured block.
 * Note that the main promotional campaign is to be displayed above these in a PromoBanner.
 */
const PromoBlock: React.FunctionComponent<PromoBlockProps> = ({ promos }) => {
    if (promos && promos.length > 0) {
        return (
            <>
                <Styles.Container>
                    {promos.map((promo, index) => 
                    <Styles.PromoContainer key={promo.callToActionURL} href={promo.callToActionURL} >
                        <LazyImage
                            src={promo.imageMedium}
                            placeholder={promo.imageSmall}
                            visibilitySensorProps={{
                                partialVisibility: true
                            }}
                        >
                            {src => 
                                <Styles.ImageContainer background={src} role="img" aria-label={promo.imageAltText ? promo.imageAltText : ""} />
                            }
                        </LazyImage>
                        <Styles.PromoContent>
                            <Heading text={promo.title} />
                            <div dangerouslySetInnerHTML={{__html: promo.content}} />
                            <Styles.CallToAction href={promo.callToActionURL}>{promo.callToActionText}</Styles.CallToAction>
                        </Styles.PromoContent>
                    </Styles.PromoContainer>
                    )}
                </Styles.Container>
            </>
        )
    } else {
        return (
            <></>
        )
    }
};

export default PromoBlock;
