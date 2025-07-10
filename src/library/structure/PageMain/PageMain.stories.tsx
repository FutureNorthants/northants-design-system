import React from 'react';
import PageMain from './PageMain';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageMain> = {
  title: 'Library/structure/Page Main Container',
  component: PageMain,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageMain>;

export const PageMainExample: Story = {
  args: {
    classes: 'testclass',
  },
  render: (args) => <PageMain {...args}>Children of the page container goes here</PageMain>,
};

export const ExampleOfTables: Story = {
  render: () => (
    <PageMain>
      <p>This is an example container for page main including a table:</p>
      <table>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>Closed</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>

      <p>A table with header rows</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>Closed</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>

      <p>A table with both header rows</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Monday</th>
            <td>Closed</td>
          </tr>
          <tr>
            <th>Tuesday</th>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <th>Wednesday</th>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <th>Thursday</th>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <th>Friday</th>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <th>Saturday</th>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <th>Sunday</th>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>

      <p>A table with side heading row with caption</p>
      <table>
        <caption>test caption</caption>
        <tbody>
          <tr>
            <th>Monday</th>
            <td>Closed</td>
          </tr>
          <tr>
            <th>Tuesday</th>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <th>Wednesday</th>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <th>Thursday</th>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <th>Friday</th>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <th>Saturday</th>
            <td>10:30 - 19:00</td>
          </tr>
          <tr>
            <th>Sunday</th>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>
    </PageMain>
  ),
};
