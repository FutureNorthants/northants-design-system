// Components
import Autocomplete from './library/components/Autocomplete/Autocomplete';
import Button from './library/components/Button/Button';
import Heading from './library/components/Heading/Heading';
import HeadingWithIcon from './library/components/HeadingWithIcon/HeadingWithIcon';
import Pagination from './library/components/Pagination/Pagination';
import CheckboxListFilter from './library/components/CheckboxListFilter/CheckboxListFilter';
import DropDownFilter from './library/components/DropDownFilter/DropDownFilter';
import PromotedLinks from './library/components/PromotedLinks/PromotedLinks';
import TextInput from './library/components/TextInput/TextInput';

export {
  Autocomplete,
  Button,
  Heading,
  HeadingWithIcon,
  Pagination,
  CheckboxListFilter,
  DropDownFilter,
  PromotedLinks,
  TextInput,
};

// Slices
import Accordion from './library/slices/Accordion/Accordion';
import BlockQuote from './library/slices/BlockQuote/BlockQuote';
import CallToAction from './library/slices/CallToAction/CallToAction';
import DownloadableFiles from './library/slices/DownloadableFiles/DownloadableFiles';
import Divider from './library/slices/Divider/Divider';
import Video from './library/slices/Video/Video';
import WarningText from './library/slices/WarningText/WarningText';
import WarningTextDisclaimer from './library/slices/WarningTextDisclaimer/WarningTextDisclaimer';

export { Accordion, BlockQuote, CallToAction, Divider, DownloadableFiles, Video, WarningText, WarningTextDisclaimer };

// Structure
export {
  AccessibleLinks,
  AlertBanner,
  AlertBannerService,
  Breadcrumbs,
  CookieBanner,
  Footer,
  Header,
  HomeHero,
  MemorialHero,
  HomeUnitarySection,
  DisplayDate,
  NewsArticleDate,
  NewsArticleImage,
  NewsArticleFilterAccordion,
  NewsArticleList,
  NewsArticleListHeader,
  NewsArticleOldBanner,
  NewsArticleFeaturedBlock,
  SkipToMainContent,
  PhaseBanner,
  PageMain,
  PageTitle,
  PageSidebar,
  PageWithSidebarContainer,
  PageWrapper,
  PromoBanner,
  PromoBlock,
  Searchbar,
  SearchResultsList,
  SectionLinks,
  SectionLinksSidebar,
  SectionLinksMobileContents,
  ServicesLinksList,
  SignpostLinks,
  MaxWidthContainer,
} from './library/structure/PageStructures';

// Themes
export { GDS_theme, north_theme, west_theme, lb_theme_north, lb_theme_west } from './themes/theme_generator';
