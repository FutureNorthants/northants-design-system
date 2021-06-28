
import React from "react";
import PageWithSidebarContainer from "./PageWithSidebarContainer";
import { PageWithSidebarContainerProps } from "./PageWithSidebarContainer.types";
import { Story } from '@storybook/react/types-6-0';

import PageMain from "../PageMain/PageMain";
import PageSidebar from "../PageSidebar/PageSidebar";

export default {
    title: 'Library/structure/Page With Sidebar Container',
    component: PageWithSidebarContainer,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<PageWithSidebarContainerProps> = (args) => <PageWithSidebarContainer {...args}>Children of the page container goes here</PageWithSidebarContainer>;


export const ExampleOfPageWithSidebar = () =>
    <PageWithSidebarContainer>
        <PageMain>
            this is the main contaniner
        </PageMain>
        <PageSidebar>
            this is the sidebar
        </PageSidebar>
    </PageWithSidebarContainer>

export const ExampleOfPageWithSidebarLeft = () =>
    <PageWithSidebarContainer>
        <PageSidebar>
            this is the sidebar
        </PageSidebar>
        <PageMain>
            this is the main contaniner
        </PageMain>
    </PageWithSidebarContainer>