import { SearchBoxProps } from './SearchBox.types';

export const ExampleSearchBoxProps: SearchBoxProps = {
  path: 'https://courses.northantsglobal.net/CourseKeySearch.asp',
  method: 'post',
  fieldName: 'keyword',
  searchText: 'Search courses',
  placeholder: 'Search courses',
  label: 'Search for courses',
  labelHidden: true,
  imageLarge:
    'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/1440/810/0/2021-12/Abington_Park_1.jpg',
  imageSmall:
    'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/144/81/0/2021-12/Abington_Park_1.jpg',
  imageAltText: 'Parkland',
  searchBoxLink: {
    title: 'View all courses',
    url: 'https://courses.northantsglobal.net/AvailableCoursesList.asp',
  },
  title: 'Search adult learning courses',
};
