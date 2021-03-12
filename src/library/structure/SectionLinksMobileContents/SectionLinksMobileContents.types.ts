export interface SectionLinksMobileContentsProps {
    /**
    * An array of the SectionLinksMobileContents, each with a title and a URL not including the current page users are on
    */
    sectionLinksArray: Array<SectionProp>;
}
export interface SectionProp {
    /**
    * Title of the section
    */
    title: string;
    /**
    * ID slug of the section
    */
    id: string;
}