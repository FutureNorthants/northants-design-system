export interface BreadcrumbsProps {
    /**
    * An array of the breadcrumbs, each with a title and a URL not including the current page users are on
    */
    breadcrumbsArray: Array<BreadcrumbProp>;
}
export interface BreadcrumbProp {
    /**
    * Title of the page
    */
    title: string;
    /**
    * URL of the page
    */
    url: string;
}