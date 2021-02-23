import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import AlertBanner from '../../structure/AlertBanner/AlertBanner';

export interface HomePageProps {

}

const submitInfo = [{
  postTo: "/search",
  params: {
      type: "search"
  }
}]
const AlertMessage = <p>Coronavirus | National lockdown: stay at home. <a href="/">Learn what this means for residents and workers here</a></p>


export const HomePage: React.FC<HomePageProps> = ({  }) => (
  <>
    <PageStructures.CookieBanner 
      title="We use cookies on this site to enhance your user experience"
      paragraph={<p>By clicking the Accept button, you agree to us doing so. <a href="#">More info on our cookie policy</a></p>}
      acceptButtonText="Accept cookies policy"
      rejectButtonText= "No, thanks"
      acceptCallback={() => {
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

    }}
  />
  <AlertBanner title="Coronavirus (COVID-19)" uid="homealert" children={AlertMessage} />
  <PageStructures.HomeHero 
    promotedLinksArray={[
        {
            title: "Make a payment",
            url: "/"
        },
        {
            title: "Contact the council",
            url: "/"
        },
        {
            title: "About our new website",
            url: "/"
        }
    ]}
    imagesArray={[
        {
            image1440x810: "https://imgur.com/nzLuqda.jpg",
            image144x81: "https://imgur.com/LPqROgx.jpg"
        },
        {
            image1440x810: "https://imgur.com/KhSo1Cn.jpg",
            image144x81: "https://imgur.com/Dr4Vetq.jpg"
        },
        {
            image1440x810: "https://imgur.com/tRB8Ts7.jpg",
            image144x81: "https://imgur.com/k5F2jSA.jpg"
        },
        {
            image1440x810: "https://imgur.com/CwHigdL.jpg",
            image144x81: "https://imgur.com/WVnsE7R.jpg"
        }
    ]}
  />

  <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <PageStructures.ServicesLinksList 
          serviceLinksArray={[
            {
              title: "Coronavirus (Covid-19)", 
              url: "/",
              iconURL: "https://svgshare.com/i/UBj.svg",
              iconHoverURL: "https://svgshare.com/i/UAa.svg",
              quickLinksArray: [
                {
                  title: "Coronavirus updates", 
                  url: "/",
                },
                {
                  title: "Business grants (Covid-19)", 
                  url: "/",
                },
                {
                  title: "Test and Trace payments", 
                  url: "/",
                }
              ]
            },
            {
              title: "Council tax", 
              url: "/",
              iconURL: "https://svgshare.com/i/UCd.svg",
              iconHoverURL: "https://svgshare.com/i/UCo.svg",
              quickLinksArray: [
                {
                  title: "Paying Council Tax", 
                  url: "/",
                },
                {
                  title: "Council Tax bands and charges", 
                  url: "/",
                },
                {
                  title: "Help with Council Tax payments", 
                  url: "/",
                }
              ]
            },
            {
              title: "Bin collection, recycling and waste", 
              url: "/iframe.html?id=page-examples-service-landing-page-examples--bin-collection-example&viewMode=story",
              iconURL: "https://svgshare.com/i/UBk.svg",
              iconHoverURL: "https://svgshare.com/i/UBs.svg",
              quickLinksArray: [
                {
                  title: "Find your collection day", 
                  url: "/",
                },
                {
                  title: "Find a waste recycling centre", 
                  url: "/",
                },
                {
                  title: "Request a bulk collection", 
                  url: "/",
                }
              ]
            },
            {
              title: "Housing and benefits", 
              url: "/",
              iconURL: "https://svgshare.com/i/UCq.svg",
              iconHoverURL: "https://svgshare.com/i/UBu.svg",
              quickLinksArray: [
                {
                  title: "Reporting a change of address", 
                  url: "/",
                },
                {
                  title: "Finding a home", 
                  url: "/",
                },
                {
                  title: "Financial housing support", 
                  url: "/",
                }
              ]
            },
            {
              title: "Adult social services", 
              url: "/",
              iconURL: "https://svgshare.com/i/UB2.svg",
              iconHoverURL: "https://svgshare.com/i/UCv.svg",
              quickLinksArray: [
                {
                  title: "Support and care for adults, their families and carers", 
                  url: "/",
                },
                {
                  title: "Reporting a concern about a vulnerable adult", 
                  url: "/",
                },
                {
                  title: "Apply for or renew a Blue Badge", 
                  url: "/",
                }
              ]
            },
            {
              title: "Children and families", 
              url: "/",
              iconURL: "https://svgshare.com/i/UBW.svg",
              iconHoverURL: "https://svgshare.com/i/UCc.svg",
              quickLinksArray: [
                {
                  title: "Report a concern about a child", 
                  url: "/",
                },
                {
                  title: "Adoption and fostering", 
                  url: "/",
                },
                {
                  title: "Find childcare", 
                  url: "/",
                }
              ]
            },
            {
              title: "Planning and building control", 
              url: "/",
              iconURL: "https://svgshare.com/i/UB3.svg",
              iconHoverURL: "https://svgshare.com/i/UCy.svg",
              quickLinksArray: [
                {
                  title: "Planning applications", 
                  url: "/",
                },
                {
                  title: "Local development plans", 
                  url: "/",
                },
                {
                  title: "Building control", 
                  url: "/",
                }
              ]
            },
            {
              title: "Schools and education", 
              url: "/",
              iconURL: "https://svgshare.com/i/UBm.svg",
              iconHoverURL: "https://svgshare.com/i/UD6.svg",
              quickLinksArray: [
                {
                  title: "Find a school", 
                  url: "/",
                },
                {
                  title: "Information for schools", 
                  url: "/",
                },
                {
                  title: "Free school meals", 
                  url: "/",
                }
              ]
            },
            {
              title: "Environment", 
              url: "/",
              iconURL: "https://svgshare.com/i/UAL.svg",
              iconHoverURL: "https://svgshare.com/i/UCx.svg",
              quickLinksArray: [
                {
                  title: "Country parks", 
                  url: "/",
                },
                {
                  title: "Animal welfare and dog warden service", 
                  url: "/",
                },
                {
                  title: "Noise and nuisance", 
                  url: "/",
                }
              ]
            },
            {
              title: "Business and Licensing", 
              url: "/",
              iconURL: "https://svgshare.com/i/UAJ.svg",
              iconHoverURL: "https://svgshare.com/i/UCG.svg",
              quickLinksArray: [
                {
                  title: "Business rates", 
                  url: "/",
                },
                {
                  title: "Support and advice", 
                  url: "/",
                },
                {
                  title: "Licenses and permits", 
                  url: "/",
                }
              ]
            },
            {
              title: "Parking, roads and transport", 
              url: "/",
              iconURL: "https://svgshare.com/i/UBv.svg",
              iconHoverURL: "https://svgshare.com/i/UBB.svg",
              quickLinksArray: [
                {
                  title: "Parking", 
                  url: "/",
                },
                {
                  title: "Report a highways problem", 
                  url: "/",
                },
                {
                  title: "Buses and trains", 
                  url: "/",
                }
              ]
            },
            {
              title: "Your council", 
              url: "/",
              iconURL: "https://svgshare.com/i/UAK.svg",
              iconHoverURL: "https://svgshare.com/i/UBt.svg",
              quickLinksArray: [
                {
                  title: "Council and democracy", 
                  url: "/",
                },
                {
                  title: "Electoral services", 
                  url: "/",
                },
                {
                  title: "Contact the council", 
                  url: "/",
                }
              ]
            },
            {
              title: "Births, deaths marriages and civil partnerships", 
              url: "/",
              iconURL: "https://svgshare.com/i/UCn.svg",
              iconHoverURL: "https://svgshare.com/i/UCm.svg",
              quickLinksArray: [
                {
                  title: "Register a birth", 
                  url: "/",
                },
                {
                  title: "Register a death", 
                  url: "/",
                },
                {
                  title: "Marriage and civil partnership", 
                  url: "/",
                }
              ]
            },
            {
              title: "Culture and tourism", 
              url: "/",
              iconURL: "https://svgshare.com/i/UCp.svg",
              iconHoverURL: "https://svgshare.com/i/UCw.svg",
              quickLinksArray: [
                {
                  title: "Leisure and community facilities", 
                  url: "/",
                },
                {
                  title: "Upcoming events", 
                  url: "/",
                },
                {
                  title: "Visit Northamptonshire", 
                  url: "/",
                }
              ]
            },
            {
              title: "Community and safety", 
              url: "/",
              iconURL: "https://svgshare.com/i/UCz.svg",
              iconHoverURL: "https://svgshare.com/i/UD7.svg",
              quickLinksArray: [
                {
                  title: "Community safety", 
                  url: "/",
                },
                {
                  title: "Planning for emergencies", 
                  url: "/",
                },
                {
                  title: "Flood and water management", 
                  url: "/",
                }
              ]
            }
          ]
        }
      />
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer 
      footerLinksArray={[
        {
          title: "About",
          url: "/"
        },
        {
          title: "Accessibility",
          url: "/"
        },
        {
          title: "Cookies",
          url: "/"
        },
        {
          title: "Contact us",
          url: "/"
        },
        {
          title: "Jobs",
          url: "/"
        },
        {
          title: "Newsletter",
          url: "/"
        }
      ]}
    />
  </>
);
