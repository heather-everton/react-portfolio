import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
  
afterEach(cleanup);

describe('Nav component renders', () => {
    it('renders', () => {
        render(<Nav />);
    });
    
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    });
})
   
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);

    expect(getByLabelText('computer')).toHaveTextContent('🖥️');
    });
})  
  
describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      
      expect(getByTestId('link')).toHaveTextContent('Heather Everton');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });

})
    