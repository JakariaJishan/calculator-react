import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('Calculator page testing', () => {
  it('snapshot matching', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Calculator />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Document testing', () => {
    render(<Calculator />);
    const calcUi = screen.getByText('AC');
    expect(calcUi).toBeInTheDocument();
  });

  test('fireEvent', () => {
    const { getByText } = render(<Calculator />);
    const ac = getByText('AC');
    fireEvent.click(ac);
    expect(getByText('AC')).toBeTruthy();
  });
  test('click button', () => {
    const { getByText } = render(<Calculator />);
    const equal = getByText('=');
    fireEvent.click(equal);
    expect(equal).toBeTruthy();
  });
  test('click + button', () => {
    const { getByText } = render(<Calculator />);
    const sum = getByText('+');
    fireEvent.click(sum);
    expect(sum).toBeTruthy();
  });
});
