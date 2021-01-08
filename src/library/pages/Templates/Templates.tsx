
import React from "react";
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';

import Divider from '../../slices/Divider/Divider';
import BlockQuote from '../../slices/BlockQuote/BlockQuote';
import DownloadableFiles from "../../slices/DownloadableFiles/DownloadableFiles";


export interface TemplatesProps {
  /**
   * Which page template is it
   */
  type: string
}


export const Templates: React.FC<TemplatesProps> = ({ type }) => {

  console.log(type)
  switch(type) {
    case 'singleCol':
      return (
        <>
        <PageStructures.Header isHomepage />
        <PageStructures.MaxWidthContainer>
            <PageStructures.PageMain>
              <Heading level={1} text="Single column page" />
      
              <p>A single column page - no sidebar</p>

              <p>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.</p>

              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

              <p>Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Sed posuere consectetur est at lobortis.</p>

              <p>Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.</p>
            </PageStructures.PageMain>
          </PageStructures.MaxWidthContainer>
          <PageStructures.Footer />
        </>
        )
    break;

    case 'twoCol':
      return (
        <>
        <PageStructures.Header isHomepage />
        <PageStructures.MaxWidthContainer>
          <PageStructures.PageWithSidebarContainer>
            <PageStructures.PageMain>
              <Heading level={1} text="Two column page" />
      
              <p>A single column page - with sidebar</p>

              <p>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.</p>

              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

              <p>Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Sed posuere consectetur est at lobortis.</p>

              <p>Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.</p>
            </PageStructures.PageMain>
            <PageStructures.PageSidebar>
              <PageStructures.SectionLinksSidebar
                Title="Pages in this section" 
                Sections={[
                  {
                      SectionTitle: "Your bins and rubbish",
                      SectionLinks: [
                          {
                              title: "Find your bin collection day",
                              url: "/",
                              isCurrent: true
                          },
                          {
                              title: "Arrange bulky item collection",
                              url: "/"
                          },
                          {
                              title: "Report a missed collection",
                              url: "/"
                          },
                          {
                              title: "Request a new or replacement bin",
                              url: "/"
                          },
                          {
                              title: "Find a household waste recycling centre",
                              url: "/"
                          },
                          {
                              title: "What to recycle and where?",
                              url: "/"
                          }
                      ]
                  }
                ]} />
              </PageStructures.PageSidebar>
            </PageStructures.PageWithSidebarContainer>
          </PageStructures.MaxWidthContainer>

          <PageStructures.Footer />
        </>
        )
    break;
  }


};