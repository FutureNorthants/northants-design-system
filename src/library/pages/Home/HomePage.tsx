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
          withReorder={true}
          serviceLinksArray={[
            {
              title: "Council tax", 
              url: "/",
              originalOrder: 0,
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
              originalOrder: 1,
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
              originalOrder: 2,
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
              originalOrder: 3,
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
              originalOrder: 4,
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
              originalOrder: 5,
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
              originalOrder: 6,
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
              originalOrder: 7,
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
              originalOrder: 8,
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
              originalOrder: 9,
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
              originalOrder: 10,
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
              originalOrder: 11,
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
              originalOrder: 12,
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
              originalOrder: 13,
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
