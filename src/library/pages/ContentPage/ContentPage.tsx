import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import Divider from '../../slices/Divider/Divider';
import BlockQuote from '../../slices/BlockQuote/BlockQuote';
import DownloadableFiles from '../../slices/DownloadableFiles/DownloadableFiles';
import CallToAction from '../../slices/CallToAction/CallToAction';
import Accordion from '../../slices/Accordion/Accordion';
import WarningTextDisclaimer from '../../slices/WarningTextDisclaimer/WarningTextDisclaimer';
import Summary from '../../structure/Summary/Summary';
import { smallTable, largeTable } from './ContentPage.storydata';
import Promotions from '../../slices/Promotions/Promotions';
import { PromoBlocksData } from '../../structure/PromoBlock/PromoBlock.storydata';
import { GoogleMapWithTitleAndDescription } from '../../slices/GoogleMap/GoogleMap.storydata';
import GoogleMap from '../../slices/GoogleMap/GoogleMap';
import Image from '../../slices/Image/Image';
import ImageAndText from '../../slices/ImageAndText/ImageAndText';
import { ImageWithCaption } from '../../slices/Image/Image.storydata';
import { ImageAndTextWithHeading } from '../../slices/ImageAndText/ImageAndText.storydata';
import SearchBox from '../../slices/SearchBox/SearchBox';
import { ExampleSearchBoxProps } from '../../slices/SearchBox/SearchBox.storydata';
import BackToTop from '../../components/BackToTop/BackToTop';

export interface ContentPageProps {}

export const ContentPage: React.FunctionComponent<ContentPageProps> = ({}) => (
  <>
    <PageStructures.Header />
    <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        <Heading level={1} text="Example page with all slices" />

        <Summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta semper velit. Fusce viverra arcu
            eu leo tincidunt pulvinar.
          </p>
        </Summary>

        <p>
          Nulla vitae elit{' '}
          <a href="http://google.com" target="_blank">
            libero
          </a>
          , a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi
          erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>

        <p>
          <strong>Bold</strong>, <em>italic</em>, <sup>sub1</sup>, <sub>sub2</sub>,{' '}
          <a href="http://google.com" target="_blank">
            link
          </a>
        </p>

        <BlockQuote
          quote="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          citation="Porta Commodo"
        />
        <p>
          Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare
          sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.
        </p>
        <ul>
          <li>
            list 1 orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </li>
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
          <li>
            <a href="#">list link 1</a>
          </li>
          <li>
            <a href="#">list link 2</a>
          </li>
          <li>
            <a href="#">list link 3</a>
          </li>
        </ul>
        <Divider />
        <Heading level={2} text="H2 - second level heading" />

        <p>
          Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
        </p>

        <Heading level={2} text="H2 - second level heading with sub titles" />
        <Heading level={3} text="H3 - third level heading under title" />
        <p>
          Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
        </p>
        <Heading level={3} text="H3 - third level heading under text" />
        <Heading level={4} text="H4 - fourth level heading under H3" />
        <p>
          Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
        </p>
        <Divider />
        <Heading level={2} text="H2 - second level heading with after divider" />
        <p>Download these files:</p>
        <DownloadableFiles
          files={[
            {
              title:
                'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
              type: 'PDF',
              url: 'https://www.google.com/test4.pdf',
              size: '1.2 MB',
              archived: false,
            },
            {
              title: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
              type: 'PDF',
              url: 'https://www.google.com/test5.pdf',
              size: '279.06 KB',
              archived: false,
            },
          ]}
        />

        <p>Click this button!</p>
        <CallToAction text="Test button" url="http://google.com" />
        <p>Example table:</p>
        <div className="table-container">
          <table>
            <caption>{smallTable.caption}</caption>
            <thead>
              <tr>
                {smallTable.headings.map((heading) => (
                  <th scope="col" key={heading}>
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {smallTable.data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((item) => (
                    <td key={item}>{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>Example massive table:</p>
        <div className="table-container">
          <table>
            <caption>{largeTable.caption}</caption>
            <thead>
              <tr>
                {largeTable.headings.map((heading) => (
                  <th scope="col" key={heading}>
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(100)].map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <th>Town {rowIndex + 1}</th>
                  {[...Array(8)].map((item, itemIndex) => (
                    <td key={itemIndex}>{rowIndex + 1 + itemIndex}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>Example table with a nested list:</p>
        <div className="table-container">
          <table>
            <caption>Example table with a nested list</caption>
            <thead>
              <tr>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Example item</th>
                <td>
                  <ul>
                    <li>List item</li>
                    <li>
                      List item
                      <ul>
                        <li>Nested list item</li>
                        <li>Nested list item</li>
                        <li>Nested list item</li>
                      </ul>
                    </li>
                    <li>List item</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Accordion
          sections={[
            {
              title: 'Tortor Magna',
              summary: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
              content: (
                <p>
                  <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem
                  lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a
                  pharetra augue.
                </p>
              ),
              isExpanded: true,
            },
            {
              title: 'Fusce Risus Malesuada',
              content: (
                <>
                  <Heading level={2} text="A slice within an accordion" />
                  <p>
                    Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                    venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.
                  </p>
                  <Divider />
                  <p>
                    <strong>Maecenas faucibus mollis interdum.</strong> Aenean eu leo quam. Pellentesque ornare sem
                    lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a
                    pharetra augue.
                  </p>
                </>
              ),
            },
          ]}
        />
        <Promotions promos={PromoBlocksData} />
        <GoogleMap {...GoogleMapWithTitleAndDescription} />
        <Heading level={2} text="Full Width Image" />
        <Image {...ImageWithCaption} />
        <ImageAndText {...ImageAndTextWithHeading} />
        <SearchBox {...ExampleSearchBoxProps} />
        <WarningTextDisclaimer />
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer
      footerLinksArray={[
        {
          title: 'About',
          url: '/',
        },
        {
          title: 'Accessibility',
          url: '/',
        },
        {
          title: 'Cookies',
          url: '/',
        },
        {
          title: 'Contact us',
          url: '/',
        },
        {
          title: 'Jobs',
          url: '/',
        },
        {
          title: 'Newsletter',
          url: '/',
        },
      ]}
    />
    <BackToTop isActive={true} />
  </>
);
