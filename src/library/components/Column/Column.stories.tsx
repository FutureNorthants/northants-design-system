import React from 'react';
import { StoryFn } from '@storybook/react';
import Column from './Column';
import { ColumnProps } from './Column.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import Row from '../Row/Row';

export default {
  title: 'Library/Components/Column',
  component: Column,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const divStyle = {
  backgroundColor: '#386193',
  color: 'white',
  width: '100%',
  textAlign: 'center' as const,
  padding: '20px 0',
};

const Template: StoryFn<ColumnProps> = (args) => (
  <SBPadding>
    <Row hasBorder>
      <Column {...args} hasBorder>
        <div style={divStyle}>The column content</div>
      </Column>
      <Column {...args} hasBorder>
        <div style={divStyle}>The column content</div>
      </Column>
      <Column {...args} hasBorder>
        <div style={divStyle}>The column content</div>
      </Column>
    </Row>
    <br />
    <p>The grey border indicates the row and the red indicates the columns.</p>
  </SBPadding>
);

export const DefaultColumnWidths = Template.bind({});

export const FullWidthColumns = Template.bind({});
FullWidthColumns.args = {
  small: 'full',
  medium: 'full',
  large: 'full',
  hasPadding: true,
};

export const HalfWidthColumns = Template.bind({});
HalfWidthColumns.args = {
  small: 'one-half',
  medium: 'one-half',
  large: 'one-half',
  hasPadding: true,
};

export const HalfWidthColumnsWithoutPadding = Template.bind({});
HalfWidthColumnsWithoutPadding.args = {
  small: 'one-half',
  medium: 'one-half',
  large: 'one-half',
  hasPadding: false,
};

export const OneThirdWidthColumns = Template.bind({});
OneThirdWidthColumns.args = {
  small: 'one-third',
  medium: 'one-third',
  large: 'one-third',
  hasPadding: true,
};

export const AutoWidthColumns = Template.bind({});
AutoWidthColumns.args = {
  small: 'auto',
  medium: 'auto',
  large: 'auto',
  hasPadding: true,
};

const CombinedTemplate: StoryFn<ColumnProps> = (args) => (
  <SBPadding>
    <Row hasBorder>
      <Column small="full" medium="full" large="full" hasBorder>
        <div style={divStyle}>Full width</div>
      </Column>
      <Column small="one-half" medium="one-half" large="one-half" hasBorder>
        <div style={divStyle}>One half</div>
      </Column>
      <Column small="one-half" medium="one-half" large="one-half" hasBorder>
        <div style={divStyle}>One half</div>
      </Column>
      <Column small="three-quarters" medium="three-quarters" large="three-quarters" hasBorder>
        <div style={divStyle}>Three quarters</div>
      </Column>
      <Column small="one-quarter" medium="one-quarter" large="one-quarter" hasBorder>
        <div style={divStyle}>One quarter</div>
      </Column>
      <Column small="one-third" medium="one-third" large="one-third" hasBorder>
        <div style={divStyle}>One third</div>
      </Column>
      <Column small="two-thirds" medium="two-thirds" large="two-thirds" hasBorder>
        <div style={divStyle}>Two thirds</div>
      </Column>
    </Row>
    <br />
    <p>The grey border indicates the row and the red indicates the columns.</p>
  </SBPadding>
);

export const CombinedColumnExample = CombinedTemplate.bind({});

const TemplateIsList: StoryFn<ColumnProps> = (args) => (
  <SBPadding>
    <Row hasBorder isList>
      <Column {...args} hasBorder>
        <div style={divStyle}>The column content</div>
      </Column>
      <Column {...args} hasBorder>
        <div style={divStyle}>The column content</div>
      </Column>
      <Column {...args} hasBorder>
        <div style={divStyle}>The column content</div>
      </Column>
    </Row>
    <br />
    <p>The Row is a &lt;ul&gt; and the Columns are &lt;li&gt;</p>
  </SBPadding>
);

export const ColumnsIsList = TemplateIsList.bind({});
ColumnsIsList.args = {
  isList: true,
};
