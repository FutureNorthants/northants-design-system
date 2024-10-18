import { PromoProps } from './PromoBlock.types';

/**
 * Example data for the PromoBlock stories
 */
export const PromoBlocksData: Array<PromoProps> = [
  {
    title: 'Go Northamptonshire!',
    content:
      'Avoid the <span onclick="alert(\'xss stopped by sanitize-html\');">crowds</span> and follow <strong>Go Northamptonshire</strong> for <em>staycation</em> inspiration this summer.',
    callToActionURL: 'https://www.northamptonshiresurprise.com/go-northamptonshire',
    callToActionText: 'Go Northamptonshire!',
    imageMedium: 'https://picsum.photos/id/18/720/405/',
    imageSmall: 'https://picsum.photos/id/18/144/81/',
    imageAltText: 'Some sort of image',
  },
  {
    title: 'Flu vaccination',
    content:
      '<script>console.log(\'xss stopped by react\')</script>The flu vaccination is available every year on the <a href="https://www.nhs.uk">NHS</a> to help protect people at risk of Flu and its complications.',
    callToActionURL: 'https://www.nhs.uk/conditions/vaccinations/flu-influenza-vaccine',
    callToActionText: 'Jab me man, jab me',
    imageMedium: 'https://picsum.photos/id/33/720/405/',
    imageSmall: 'https://picsum.photos/id/33/144/81/',
    imageAltText: 'A graphical thing',
  },
  {
    title: 'Get active',
    content: 'Whatever your age, whatever your ability, there are lots of easy ways to be active.',
    callToActionURL: 'https://www.nhs.uk/live-well/exercise/get-active-your-way',
    callToActionText: 'Find out more',
    imageMedium: 'https://picsum.photos/id/66/720/405/',
    imageSmall: 'https://picsum.photos/id/66/144/81/',
    imageAltText: 'Something or other',
  },
  {
    title: 'A fourth one with a longer title that will wrap',
    content: 'This one is used by the Promotions slice.',
    callToActionURL: 'https://xkcd.com/125/',
    callToActionText: "I heard you're good",
    imageMedium: 'https://picsum.photos/id/81/720/405/',
    imageSmall: 'https://picsum.photos/id/81/144/81/',
    imageAltText: 'Something or other',
  },
];
