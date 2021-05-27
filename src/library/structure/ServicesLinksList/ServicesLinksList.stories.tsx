
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import ServicesLinksList from "./ServicesLinksList";
import { ServicesLinksListProps } from "./ServicesLinksList.types";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

export default {
    title: "library/Structure/Service Links List"
};

const Template: Story<ServicesLinksListProps> = (args) => <MaxWidthContainer><ServicesLinksList {...args} /></MaxWidthContainer>;


const exampleData = [
  {
    title: "Coronavirus (Covid-19)", 
    url: "/",
    iconKey: "covid",
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
    iconKey: "counciltax",
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
    iconKey: "bins",
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
    iconKey: "housing",
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
    iconKey: "adults",
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
    iconKey: "children",
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
    iconKey: "planning",
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
    iconKey: "schools",
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
    iconKey: "environment",
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
    iconKey: "business",
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
    iconKey: "roads",
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
    iconKey: "council",
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
    iconKey: "births",
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
    iconKey: "culture",
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
    iconKey: "safety",
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



const exampleDataNoIcons = [ {
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
export const ExampleServicesLinksList = Template.bind({});    
ExampleServicesLinksList.args = {
  serviceLinksArray: exampleData
};

export const ServicesLinksListWithoutIcons = Template.bind({});    
ServicesLinksListWithoutIcons.args = {
  serviceLinksArray: exampleDataNoIcons
};

export const ExampleServicesLinksListWithCard = Template.bind({});    
ExampleServicesLinksListWithCard.args = {
  serviceLinksArray: exampleData,
  hasBackground: true
};