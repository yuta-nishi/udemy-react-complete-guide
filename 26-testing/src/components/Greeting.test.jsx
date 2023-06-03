import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('Greeting component', () => {
  test('render Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('render "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText('good to see you', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('render "Changed!" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const helloWorldElement = screen.getByText('Changed!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const helloWorldElement = screen.queryByText('good to see you', { exact: false });
    expect(helloWorldElement).toBeNull();
  });
});
