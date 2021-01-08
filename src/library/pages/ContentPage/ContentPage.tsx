
import React from "react";
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';

import Divider from '../../slices/Divider/Divider';
import BlockQuote from '../../slices/BlockQuote/BlockQuote';
import DownloadableFiles from "../../slices/DownloadableFiles/DownloadableFiles";
import CallToAction from "../../slices/CallToAction/CallToAction";


export interface ContentPageProps {

}


export const ContentPage: React.FC<ContentPageProps> = ({  }) => (
    <>
  <PageStructures.Header isHomepage />
  <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <Heading level={1} text="Example page with all slices" />

        <p>Nulla vitae elit <a href="http://google.com">libero</a>, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <p><strong>Bold</strong>, <em>italic</em>, <sup>sub1</sup>, <sub>sub2</sub>, <a href="http://google.com">link</a></p>

        <BlockQuote quote="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." citation="Porta Commodo" />
        <p>Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.</p>
        <ul>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
        </ul>
        <ol>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
        </ol> 
        <p>text inbetween lists</p>
        <ul>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
        </ul>
        <Divider />
        <Heading level={2} text="H2 - second level heading" />
        
        <p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.</p>
        
        <Heading level={2} text="H2 - second level heading with sub titles" />
        <Heading level={3} text="H3 - third level heading under title" />
        <p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.</p>
        <Heading level={3} text="H3 - third level heading under text" />
        <Heading level={4} text="H4 - fourth level heading under H3" />
        <p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.</p>
        <Divider />
        <Heading level={2} text="H2 - second level heading with after divider" />
        <p>Download these files:</p>
        <DownloadableFiles files={[
          {
            title: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
            type: "PDF",
            url: "https://www.google.com/test4.pdf",
            size: "1.2 MB"
          },
          {
              title: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
              type: "PDF",
              url: "https://www.google.com/test5.pdf",
              size: "279.06 KB"
          }
        ]} />

        <p>Click this button!</p>
        <CallToAction text="Test button" url="http://google.com" />
        <p>Example table:</p>
        <div className="table_container">
          <table>
            <caption>Month you apply</caption>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Rate for vehicles</th>
                <th scope="col">Rate for bicycles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">First 6 weeks</th>
                <td>£109.80 per week</td>
                <td>£59.10 per week</td>
              </tr>
              <tr>
                <th scope="row">Next 33 weeks</th>
                <td>£159.80 per week</td>
                <td>£89.10 per week</td>
              </tr>
              <tr>
                <th scope="row">Total estimated pay</th>
                <td>£4,282.20</td>
                <td>£2,182.20</td>
              </tr>
            </tbody>
          </table>
        </div>
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