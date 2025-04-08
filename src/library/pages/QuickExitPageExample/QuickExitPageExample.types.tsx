import React from 'react';

export interface QuickExitPageExampleProps {
  quickExitButtonLabel?: string;

  quickExitHyperlink: string;

  quickExitButtonSolidOrTransparent?: 'solid' | 'transparent';

  quickExitButtonIncludeIcon?: false;

  includeBackToTopInExample?: boolean;
}
