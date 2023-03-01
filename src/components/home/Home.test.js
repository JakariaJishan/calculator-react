import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from './Home';


describe('Home page testing', ()=>{
    it('snapshot matching', ()=>{
        const tree = renderer.create(<BrowserRouter><Home/></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot()
    })
    
    test('Document testing', ()=>{
        render(<Home/>)
        const homeUi = screen.getByText('Welcome to our page...');
        expect(homeUi).toBeInTheDocument()
    })
})
