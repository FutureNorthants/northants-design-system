import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';

export interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = ({  }) => (
  <>
  <PageStructures.Header isHomepage />
  <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <Heading level={1} text="Home page" />

        <p>This is where the example home page would go - combining components to create an example of a total page together</p>

        <PageStructures.ServicesLinksList 
          serviceLinksArray={[
            {
              title: "Council tax", 
              url: "/",
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
              url: "/",
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
