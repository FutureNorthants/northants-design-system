import React from 'react';
import { render } from '@testing-library/react';

import PostCodeSearchApollo from './PostCodeSearchApollo';
import { PostCodeSearchApolloProps } from './PostCodeSearchApollo.types';

describe('Test Component', () => {
  let props: PostCodeSearchApolloProps;

  beforeEach(() => {
    props = {
      foo: 'bar',
    };
  });

  const renderComponent = () => render(<PostCodeSearchApollo {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'example content';
    const { getByTestId } = renderComponent();

    const component = getByTestId('PostCodeSearchApollo');

    expect(component).toHaveTextContent('Get results');
  });
});
