import { SearchBoxProps } from './SearchBox.types';
import { ExampleCustomSearchProps } from '../../components/CustomSearch/CustomSearch.storydata';

export const ExampleSearchBoxProps: SearchBoxProps = {
  customSearch: ExampleCustomSearchProps,
  imageLarge: 'https://picsum.photos/id/17/1200/600',
  imageSmall: 'https://picsum.photos/id/17/600/300',
  imageAltText: 'Parkland',
  searchBoxLink: {
    title: 'View all courses',
    url: 'https://courses.northantsglobal.net/AvailableCoursesList.asp',
  },
  title: 'Search adult learning courses',
};
