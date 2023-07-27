// Components
import Autocomplete from './library/components/Autocomplete/Autocomplete';
import BackToTop from './library/components/BackToTop/BackToTop';
import Button from './library/components/Button/Button';
import DynamicIcon from './library/components/DynamicIcon/DynamicIcon';
import Heading from './library/components/Heading/Heading';
import HeadingWithIcon from './library/components/HeadingWithIcon/HeadingWithIcon';
import Map from './library/components/Map/Map';
import MapMarker from './library/components/MapMarker/MapMarker';
import Pagination from './library/components/Pagination/Pagination';
import CheckboxListFilter from './library/components/CheckboxListFilter/CheckboxListFilter';
import DropDownFilter from './library/components/DropDownFilter/DropDownFilter';
import PromotedLinks from './library/components/PromotedLinks/PromotedLinks';
import StaticMap from './library/components/StaticMap/StaticMap';
import TextInput from './library/components/TextInput/TextInput';

export {
  Autocomplete,
  BackToTop,
  Button,
  DynamicIcon,
  Heading,
  HeadingWithIcon,
  Map,
  MapMarker,
  Pagination,
  CheckboxListFilter,
  DropDownFilter,
  PromotedLinks,
  StaticMap,
  TextInput,
};

// Slices
import Accordion from './library/slices/Accordion/Accordion';
import BlockQuote from './library/slices/BlockQuote/BlockQuote';
import CallToAction from './library/slices/CallToAction/CallToAction';
import CouncilTaxAlphabeticalDirectory from './library/slices/CouncilTaxAlphabeticalDirectory/CouncilTaxAlphabeticalDirectory';
import Cards from './library/slices/Cards/Cards';
import DownloadableFiles from './library/slices/DownloadableFiles/DownloadableFiles';
import Divider from './library/slices/Divider/Divider';
import GoogleMap from './library/slices/GoogleMap/GoogleMap';
import Image from './library/slices/Image/Image';
import ImageAndText from './library/slices/ImageAndText/ImageAndText';
import InquestSchedule from './library/slices/InquestSchedule/InquestSchedule';
import Promotions from './library/slices/Promotions/Promotions';
import SearchBox from './library/slices/SearchBox/SearchBox';
import Video from './library/slices/Video/Video';
import WarningText from './library/slices/WarningText/WarningText';
import WarningTextDisclaimer from './library/slices/WarningTextDisclaimer/WarningTextDisclaimer';

export {
  Accordion,
  BlockQuote,
  CallToAction,
  Cards,
  CouncilTaxAlphabeticalDirectory,
  Divider,
  DownloadableFiles,
  GoogleMap,
  Image,
  ImageAndText,
  InquestSchedule,
  Promotions,
  SearchBox,
  Video,
  WarningText,
  WarningTextDisclaimer,
};

// Structure
export * from './library/structure/PageStructures';

// Themes
export { GDS_theme, north_theme, west_theme, lb_theme_north, lb_theme_west } from './themes/theme_generator';

// CSS reset/common to all
export { GlobalStyleReset } from './themes/GlobalStyleReset.jsx';

// Directory
import DirectoryService from './library/directory/DirectoryService/DirectoryService';
import DirectoryServiceList from './library/directory/DirectoryServiceList/DirectoryServiceList';
import DirectoryShortList from './library/directory/DirectoryShortList/DirectoryShortList';
import {
  DirectoryShortListProvider,
  useDirectoryShortListContext,
} from './library/contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import DirectoryDocumentList from './library/directory/DirectoryDocumentList/DirectoryDocumentList';

export {
  DirectoryService,
  DirectoryServiceList,
  DirectoryShortList,
  DirectoryShortListProvider,
  useDirectoryShortListContext,
  DirectoryDocumentList,
};
