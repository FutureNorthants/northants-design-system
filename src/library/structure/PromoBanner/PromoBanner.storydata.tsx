/**
 * Example data for the PromoBanner stories
 */
import React from 'react';
import { PromoBannerProps } from './PromoBanner.types';

export const PromoBannerContentText =
  'We’re looking for people to do this amazing thing in an amazing manner, during an amazing time of amazingness.';

export const PromoBannerContent = <p>{PromoBannerContentText}</p>;

export const PromoBannerData: PromoBannerProps = {
  title: 'This is something amazing we want to promote',
  ctaUrl: 'https://xkcd.com/844/',
  ctaText: 'Would you like to know more?',
  image1440x810: 'https://via.placeholder.com/1440x810.jpg/DDFFFF/000000/?text=Promo+Banner+image',
  image144x81: 'https://via.placeholder.com/144x81.jpg/DDFFFF/000000/?text=Promo+Banner+image',
  children: PromoBannerContent,
};
