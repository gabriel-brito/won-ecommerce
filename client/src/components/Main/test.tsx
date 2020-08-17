import { screen, render } from '@testing-library/react'
import Main from './index'

describe('<Main />', () => {
  it('Should Main File render', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should have background-color in it', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
})
