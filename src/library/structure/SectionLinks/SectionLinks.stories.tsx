
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import SectionLinks from "./SectionLinks";
import { SectionLinksProps } from "./SectionLinks.types";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

export default {
    title: "library/Structure/Section Links",
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<SectionLinksProps> = (args) => <MaxWidthContainer><SectionLinks {...args} /></MaxWidthContainer>;

export const ExampleSectionLinks = Template.bind({});    
ExampleSectionLinks.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    }
  ]
};


export const ExampleSectionLinksWithoutTitle = Template.bind({});    
ExampleSectionLinksWithoutTitle.args = {
  sectionTitle: "Section title",
  displayTitle: false,
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    }
  ]
};


export const SectionLinks1Link = Template.bind({});    
SectionLinks1Link.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const SectionLinks2Links = Template.bind({});    
SectionLinks2Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    }
  ]
};
export const SectionLinks3Links = Template.bind({});    
SectionLinks3Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    }
  ]
};
export const SectionLinks4Links = Template.bind({});    
SectionLinks4Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    }
  ]
};
export const SectionLinks5Links = Template.bind({});    
SectionLinks5Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    }
  ]
};
export const SectionLinks6Links = Template.bind({});    
SectionLinks6Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const SectionLinks7Links = Template.bind({});    
SectionLinks7Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 7", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const SectionLinks8Links = Template.bind({});    
SectionLinks8Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 7", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 8", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const SectionLinks9Links = Template.bind({});    
SectionLinks9Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 7", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 8", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 9", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const SectionLinks10Links = Template.bind({});    
SectionLinks10Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 7", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 8", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 9", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 10", 
      summary: "summary", 
      url: "/"
    }
  ]
};

export const SectionLinks11Links = Template.bind({});    
SectionLinks11Links.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 5", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 6", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 7", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 8", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 9", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 10", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 11", 
      summary: "summary", 
      url: "/"
    }
  ]
};