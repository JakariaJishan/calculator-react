import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('Calculator page testing', () => {
  it('snapshot matching', () => {
    const tree = renderer.create(<BrowserRouter><Calculator /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Document testing', () => {
    render(<Calculator />);
    const calcUi = screen.getByText('AC');
    expect(calcUi).toBeInTheDocument();
  });
});
