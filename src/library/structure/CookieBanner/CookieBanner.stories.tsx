
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import CookieBanner from "./CookieBanner";
import { CookieBannerProps } from "./CookieBanner.types";
import CookieClear from './CookieClear';


export default {
  title: 'Library/structure/Cookie Banner',
  component: CookieBanner
};

const Template: Story<CookieBannerProps> = (args) => 
<><CookieBanner {...args} /><CookieClear /></>;

export const ExampleCookieBanner = Template.bind({});    
ExampleCookieBanner.args = {
  title: "Tell us whether you accept cookies",
  paragraph: <p>We use <a href="#">cookies to collect information</a> about how you use GOV.UK. We use this information to make the website work as well as possible and improve government services.</p>,
  acceptButtonText: "Accept all cookies",
  rejectButtonText: "Reject all cookies",
  acceptCallback: () => {
    console.log('loading trackers');
    var tag = document.createElement("script");
    tag.src = "https://www.googletagmanager.com/gtag/js?id=<%= ENV[\"GTM_TRACKING_ID\"] %>";
    document.getElementsByTagName("head")[0].appendChild(tag);



    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', '<%= ENV["GA_TRACKING_ID"] %>');


    (function (h, o, t, j, a, r) {
        h.hj = h.hj || function () {
            (h.hj.q = h.hj.q || []).push(arguments)
        };
        h._hjSettings = {
            hjid: 12345,
            hjsv: 6
        };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

}
};
