import React from 'react';
import Heading from '../../components/Heading/Heading';
import { SBPadding } from '../../../../.storybook/SBPadding';
import BackToTop from '../../components/BackToTop/BackToTop';

interface RecyclingInformationPageExample1Props {}

export const RecyclingInformationPageExample1: React.FunctionComponent<
  RecyclingInformationPageExample1Props
> = ({}) => {
  return (
    <>
      <Heading level={1} text="Recycling" />
      <p>
        Recycling is great, but reusing items is even better. Reusing items, including repairing them, for their
        original purpose or a new purpose, gives them a new lease of life, saves money and reduces waste.
      </p>
    </>
  );
};

interface RecyclingInformationPageExample2Props {}

export const RecyclingInformationPageExample2: React.FunctionComponent<
  RecyclingInformationPageExample2Props
> = ({}) => {
  return (
    <>
      <Heading level={1} text="Recycling" />
      <p>
        Recycling is great, but reusing items is even better. Reusing items, including repairing them, for their
        original purpose or a new purpose, gives them a new lease of life, saves money and reduces waste.
      </p>
      <Heading level={2} text="Furniture" />
      <p>
        Please note: All upholstered furniture, such as sofas, mattresses and padded dining chairs, need to have an
        appropriate fire label to be donated to charity for reuse – please see the charity websites below for further
        information. There are several charities locally that can offer free collections for larger items of furniture
        that are able to be reused (they need to be clean and undamaged), such as:
      </p>
    </>
  );
};

interface RecyclingInformationPageExample3Props {}

export const RecyclingInformationPageExample3: React.FunctionComponent<
  RecyclingInformationPageExample3Props
> = ({}) => {
  return (
    <>
      <Heading level={1} text="Recycling" />
      <p>
        Recycling is great, but reusing items is even better. Reusing items, including repairing them, for their
        original purpose or a new purpose, gives them a new lease of life, saves money and reduces waste.
      </p>
      <Heading level={2} text="Furniture" />
      <p>
        Please note: All upholstered furniture, such as sofas, mattresses and padded dining chairs, need to have an
        appropriate fire label to be donated to charity for reuse – please see the charity websites below for further
        information. There are several charities locally that can offer free collections for larger items of furniture
        that are able to be reused (they need to be clean and undamaged), such as:
      </p>
      <Heading level={2} text="Reuse at Recycling Centres" />
      <p>
        If your items are in a good condition and you think they can be re-used please take them to the reuse drop off
        area. The Reuse Agent will assess the item and advise if it is suitable for reuse.
      </p>
      <p>
        Items collected for reuse in West Northamptonshire are sold at an off-site reuse shop (apart from Farthinghoe
        which has its own reuse shop) allowing people to purchase affordable items and diverting them from disposal.
        There are 3 reuse shops in West Northamptonshire. They are operated by independent businesses under contract to
        us:
      </p>
    </>
  );
};
