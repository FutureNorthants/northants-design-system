
import React from "react";

import { NewsArticleImageProps } from "./NewsArticleImage.types";
import * as Styles from "./NewsArticleImage.styles";
import LazyImage from "react-lazy-progressive-image";

/**
 * Form element - hint text
 */
const NewsArticleImage: React.FC<NewsArticleImageProps> = ({
    image1440x810,
    image144x81,
    imageAltText,
    imageCaption
  }) => {
    return (
      <Styles.ImageContainer>
        <LazyImage
            src={image1440x810}
            placeholder={image144x81}
            visibilitySensorProps={{
                partialVisibility: true
            }}
        >
            {src => 
                <>
                    <Styles.StyledImage
                        itemprop="image"
                        src={src}
                        alt={imageAltText ? imageAltText : ""}
                    />
                    {imageCaption &&
                      <Styles.Small itemprop="copyrightHolder">{imageCaption}</Styles.Small>
                    }
                </>
            }
        </LazyImage>
      </Styles.ImageContainer>
    );
  };
  

export default NewsArticleImage;

