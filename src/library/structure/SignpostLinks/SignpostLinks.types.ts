export interface SignpostLinksProps {
    /**
     * Optional override for the top line of text
     */
    TopLineText?: string;
    /**
    * An array of the SignpostLinks
    */
    SignpostLinksArray: Array<SignpostLinkProp>;
    /**
     * Optional, but recommended - a link to send the user to the other council's (West or North) specific service page, defaults to the homepage
     */
    OtherCouncilLink?: string;
    /**
     * An event to pass up for when seaching with via postcode
     */
    PostCodeSearch?: ((e: any) => any) | false;
}
export interface SignpostLinkProp {
    /**
    * The number that represents the local area - based on the list of all local areas in alphabetical order
    */
    sovereignCode: number;
    /**
    * The name of the local area
    */
    areaName: string;
    /**
    * URL of this service on the local area's website
    */
    url: string;
}