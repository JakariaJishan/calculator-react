import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Quote testing', () => {
  it('snapshot matching', () => {
    const tree = renderer.create(<BrowserRouter><Quote /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Document testing', () => {
    render(<BrowserRouter><Quote /></BrowserRouter>);
    const navbarUi = screen.getByText('Loading ....');
    expect(navbarUi).toBeInTheDocument();
  });
});
