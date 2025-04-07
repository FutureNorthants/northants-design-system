import React from 'react';

export interface QuickExitPageExampleProps {
  quickExitButtonLabel?: string;

  quickExitHyperlink: string;

  includeBackToTopInExample?: boolean;

  children: React.ReactElement;
}
