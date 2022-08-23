import React from 'react';

export interface SummaryListProps {
  terms: SummaryRowProps[];
}

export interface SummaryRowProps {
  term: string;
  detail: React.ReactChild;
}
