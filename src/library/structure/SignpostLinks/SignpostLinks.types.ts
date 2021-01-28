import {SignpostLinkProp} from '../SignpostLinksList/SignpostLinksList.types'

export interface SignpostLinksProps {
    /**
     * Optional override for the top line of text
     */
    TopLineText?: string;
    /**
    * An array of the SignpostLinks
    */
    signpostLinksArray: Array<SignpostLinkProp>;
    /**
     * Optional, but recommended - a link to send the user to the other council's (West or North) specific service page, defaults to the homepage
     */
    otherCouncilLink?: string;
}
