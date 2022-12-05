import { SearchBoxProps } from './SearchBox.types';
import { ExampleCustomSearchProps } from '../../components/CustomSearch/CustomSearch.storydata';

export const ExampleSearchBoxProps: SearchBoxProps = {
  customSearch: ExampleCustomSearchProps,
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
