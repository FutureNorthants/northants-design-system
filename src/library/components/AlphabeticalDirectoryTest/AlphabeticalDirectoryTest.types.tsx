import React from 'react';

export interface AlphabeticalDirectoryTestProps {}
export interface AlphabeticalDirectoryTestItemProps {
  children?;
}
export interface AlphabeticalDirectoryTestHeaderProps {
  children?;
}
export interface AlphabeticalDirectoryTestListItemProps {
  children?;
}

export const AlphabeticalDirectoryTestItem: React.FunctionComponent<AlphabeticalDirectoryTestItemProps> = ({
  children,
  ...args
}) => {
  return (
    <>
      <strong className={'AlphabeticalDirectoryTestItemClass'} {...args}>
        {children}
      </strong>
    </>
  );
};

export const AlphabeticalDirectoryTestHeader: React.FunctionComponent<AlphabeticalDirectoryTestHeaderProps> = ({
  children,
  ...args
}) => {
  return (
    <>
      <strong className="AlphabeticalDirectoryTestHeaderClass" {...args}>
        {children}
      </strong>
    </>
  );
};

export const AlphabeticalDirectoryTestListItem: React.FunctionComponent<AlphabeticalDirectoryTestListItemProps> = ({
  children,
  ...args
}) => {
  return (
    <>
      <li className="AlphabeticalDirectoryTestListItemClass" {...args}>
        {children}
      </li>
    </>
  );
};
