/**
 * Example data for the PromoBlock stories
 */
export const PromoBlocksData = [
  {
    title: "Go Northamptonshire!",
    content:
      "Avoid the <span onclick=\"alert('xss stopped by sanitize-html');\">crowds</span> and follow <strong>Go Northamptonshire</strong> for <em>staycation</em> inspiration this summer.",
    callToActionURL:
      "https://www.northamptonshiresurprise.com/go-northamptonshire",
    callToActionText: "Go Northamptonshire!",
    imageMedium:
      "https://via.placeholder.com/720x405.jpg/DDFFFF/000000/?text=Promo+1",
    imageSmall:
      "https://via.placeholder.com/144x81.jpg/DDFFFF/000000/?text=Promo+1",
    imageAltText: "Some sort of image",
  },
  {
    title: "Flu vaccination",
    content:
      "<script>console.log('xss stopped by react')</script>The flu vaccination is available every year on the <a href=\"https://www.nhs.uk\">NHS</a> to help protect people at risk of Flu and its complications.",
    callToActionURL:
      "https://www.nhs.uk/conditions/vaccinations/flu-influenza-vaccine",
    callToActionText: "Jab me man, jab me",
    imageMedium:
      "https://via.placeholder.com/720x405/FFDDFF/000000/?text=Promo+2",
    imageSmall:
      "https://via.placeholder.com/144x81/FFDDFF/000000/?text=Promo+2",
    imageAltText: "A graphical thing",
  },
  {
    title: "Get active",
    content:
      "Whatever your age, whatever your ability, there are lots of easy ways to be active.",
    callToActionURL:
      "https://www.nhs.uk/live-well/exercise/get-active-your-way",
    callToActionText: "Find out more",
    imageMedium:
      "https://via.placeholder.com/720x405/FFFFDD/000000/?text=Promo+3",
    imageSmall:
      "https://via.placeholder.com/144x81/FFFFDD/000000/?text=Promo+3",
    imageAltText: "Something or other",
  },
];
