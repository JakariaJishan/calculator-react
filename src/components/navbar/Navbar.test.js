import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('Navbar testing', () => {
  it('snapshot matching', () => {
    const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Document testing', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    const navbarUi = screen.getAllByText('Calculator');
    expect(navbarUi).toBeTruthy();
  });
});
