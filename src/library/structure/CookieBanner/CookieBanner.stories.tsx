
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import CookieBanner from "./CookieBanner";
import { CookieBannerProps } from "./CookieBanner.types";
import CookieClear from './CookieClear';


export default {
  title: 'Library/structure/Cookie Banner',
  component: CookieBanner,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    }
  },
};

const Template: Story<CookieBannerProps> = (args) => 
<><CookieBanner {...args} /><CookieClear /></>;

export const ExampleCookieBanner = Template.bind({});    
ExampleCookieBanner.args = {
  title: "We use cookies on this site to enhance your user experience",
  paragraph: <p>By clicking the Accept button, you agree to us doing so. <a href="#">More info on our cookie policy</a></p>,
  acceptButtonText: "Accept cookies policy",
  rejectButtonText: "No, thanks",
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
